import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import User from './user.model';
import * as factory from '../../utils/handlerFactory';

export const getMe = catchAsync(async (req, res) => {
  const userId = req.user.userId;
  const user = await User.findById(userId).populate(
    'followers following',
    'name email profilePic',
  );
  res.status(httpStatus.OK).json({
    success: true,
    statusCode: httpStatus.OK,
    message: 'User retrieved successfully',
    data: user,
  });
});

export const updateMe = catchAsync(async (req, res) => {
  const userId = req.user.userId;
  const user = await User.findByIdAndUpdate(userId, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(httpStatus.OK).json({
    success: true,
    statusCode: httpStatus.OK,
    message: 'User updated successfully',
    data: user,
  });
});
// Controller for fetching top users
export const getTopUsers = catchAsync(async (req, res) => {
  const topUsers = await User.aggregate([
    // Add a field that counts the number of followers
    { $addFields: { followerCount: { $size: '$followers' } } },
    // Sort by the follower count in descending order
    { $sort: { followerCount: -1 } },
    // Limit to top 5 users
    { $limit: 5 },
    // Project only the fields we need
    {
      $project: {
        name: 1,
        profilePic: 1,
        followers: 1,
        followerCount: 1,
      },
    },
  ]);

  res.status(200).json({ data: topUsers });
});
export const createUser = factory.createOne(User);
export const getUser = factory.getOne(User);
export const getAllUsers = factory.getAll(User);
export const updateUser = factory.updateOne(User);
export const deleteUser = factory.deleteOne(User);
