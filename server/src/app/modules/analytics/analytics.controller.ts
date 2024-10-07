import catchAsync from '../../utils/catchAsync';
import Category from '../category/category.model';
import Comment from '../comment/comment.model';
import Payment from '../payment/payment.model';
import Post from '../post/post.model';
import User from '../user/user.model';

export const getModelCounts = catchAsync(async (req, res) => {
  const user = await User.countDocuments();
  const post = await Post.countDocuments();
  const category = await Category.countDocuments();
  res.json({ user, post, category });
});

export const getPostsMetrics = catchAsync(async (req, res) => {
  const endDate = new Date();
  const startDate = new Date(endDate);
  startDate.setDate(startDate.getDate() - 29);

  // Aggregate posts by creation date
  const posts = await Post.aggregate([
    {
      $match: {
        createdAt: { $gte: startDate, $lte: endDate },
      },
    },
    {
      $group: {
        _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
        postCount: { $sum: 1 },
      },
    },
  ]);

  // Aggregate comments by post creation date
  const comments = await Comment.aggregate([
    {
      $match: {
        createdAt: { $gte: startDate, $lte: endDate },
      },
    },
    {
      $group: {
        _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
        commentCount: { $sum: 1 },
      },
    },
  ]);

  // Aggregate upvotes by post creation date
  const upvotes = await Post.aggregate([
    {
      $match: {
        createdAt: { $gte: startDate, $lte: endDate },
      },
    },
    {
      $group: {
        _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
        upvoteCount: { $sum: { $size: '$upvotes' } }, // Counting upvotes per post
      },
    },
  ]);

  // Mapping post, comment, and upvote counts by date
  const postMap = new Map(posts.map((p) => [p._id, p.postCount]));
  const commentMap = new Map(comments.map((c) => [c._id, c.commentCount]));
  const upvoteMap = new Map(upvotes.map((u) => [u._id, u.upvoteCount]));

  // Prepare the result with all three datasets
  const resultData = Array.from({ length: 30 }, (_, i) => {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);
    const dateString = date.toISOString().split('T')[0];

    return {
      date: dateString,
      postCount: postMap.get(dateString) || 0,
      commentCount: commentMap.get(dateString) || 0,
      upvoteCount: upvoteMap.get(dateString) || 0,
    };
  });

  res.json(resultData);
});

export const getPaymentMetrics = catchAsync(async (req, res) => {
  const endDate = new Date();
  const startDate = new Date(endDate);
  startDate.setDate(startDate.getDate() - 29);

  const payments = await Payment.aggregate([
    {
      $match: {
        createdAt: { $gte: startDate, $lte: endDate },
        payment_status: 'completed',
      },
    },
    {
      $group: {
        _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
        totalAmount: { $sum: '$amount' },
      },
    },
  ]);

  const paymentMap = new Map(
    payments.map((payment) => [payment._id, payment.totalAmount]),
  );
  const paymentData = Array.from({ length: 30 }, (_, i) => {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);
    const dateString = date.toISOString().split('T')[0];
    return { date: dateString, totalAmount: paymentMap.get(dateString) || 0 };
  });

  res.json(paymentData);
});
