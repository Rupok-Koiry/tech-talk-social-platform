import React, { useEffect, useState } from "react";
import {
  BiDownvote,
  BiSolidDownvote,
  BiSolidUpvote,
  BiUpvote,
} from "react-icons/bi";
import { GoComment } from "react-icons/go";
import { useMe } from "@/hooks/auth/useMe";
import { useUpdatePost } from "@/hooks/posts/useUpdatePost";
import { LinkedinShareButton } from "react-share";
import { FaLinkedin } from "react-icons/fa6";

const PostMedia = ({
  postUpvotes,
  postDownvotes,
  postId,
  totalComments,
}: {
  postUpvotes: string[];
  postDownvotes: string[];
  postId: string;
  totalComments: number;
}) => {
  const { user } = useMe();
  const { updatePost } = useUpdatePost();

  const [upvotes, setUpvotes] = useState(postUpvotes);
  const [downvotes, setDownvotes] = useState(postDownvotes);
  const [userVote, setUserVote] = useState<"upvote" | "downvote" | null>(null);

  useEffect(() => {
    if (!user) return;
    if (upvotes.includes(user._id)) {
      setUserVote("upvote");
    } else if (downvotes.includes(user._id)) {
      setUserVote("downvote");
    } else {
      setUserVote(null);
    }
  }, [upvotes, downvotes, user]);

  const handleVote = (voteType: "upvote" | "downvote") => {
    const otherVoteType = voteType === "upvote" ? "downvote" : "upvote";
    const voteArray = voteType === "upvote" ? upvotes : downvotes;
    const otherVoteArray = voteType === "upvote" ? downvotes : upvotes;

    if (userVote === voteType) {
      // Remove vote
      const newVoteArray = voteArray.filter((id: string) => id !== user._id);
      updatePost({
        postId: postId,
        newPost: { [voteType + "s"]: newVoteArray },
      });
      if (voteType === "upvote") setUpvotes(newVoteArray);
      else setDownvotes(newVoteArray);
      setUserVote(null);
    } else {
      // Add vote and remove from other vote type if necessary
      const newVoteArray = [...voteArray, user._id];
      const newOtherVoteArray = otherVoteArray.filter(
        (id: string) => id !== user._id
      );
      updatePost({
        postId: postId,
        newPost: {
          [voteType + "s"]: newVoteArray,
          [otherVoteType + "s"]: newOtherVoteArray,
        },
      });
      if (voteType === "upvote") {
        setUpvotes(newVoteArray);
        setDownvotes(newOtherVoteArray);
      } else {
        setDownvotes(newVoteArray);
        setUpvotes(newOtherVoteArray);
      }
      setUserVote(voteType);
    }
  };

  const shareUrl = `${window.location.origin}/feeds`;

  return (
    <div className="flex justify-between items-center gap-12">
      <div className="flex justify-between items-center text-gray-500 text-xs">
        <div className="flex items-center space-x-2 bg-gray-100 rounded-xl px-4 py-2">
          <button
            onClick={() => handleVote("upvote")}
            className="flex items-center"
          >
            {userVote === "upvote" ? (
              <BiSolidUpvote className="text-xl text-primary-blue" />
            ) : (
              <BiUpvote className="text-xl" />
            )}
          </button>
          <span>{upvotes.length}</span>
          <button
            onClick={() => handleVote("downvote")}
            className="flex items-center ml-4"
          >
            {userVote === "downvote" ? (
              <BiSolidDownvote className="text-xl text-primary-blue" />
            ) : (
              <BiDownvote className="text-xl" />
            )}
          </button>
          <span>{downvotes.length}</span>
        </div>
      </div>
      {/* Comment section */}
      <div className="flex items-center space-x-2 bg-gray-100 rounded-xl px-4 py-1">
        <button className="flex items-center">
          <GoComment className="text-lg" />
        </button>
        <span>{totalComments}</span>
      </div>
      {/* Share */}
      <LinkedinShareButton url={shareUrl}>
        <div className="flex items-center space-x-2 bg-gray-100 rounded-xl px-4 py-1">
          <FaLinkedin className="text-lg" />
          <span>Share</span>
        </div>
      </LinkedinShareButton>
    </div>
  );
};

export default PostMedia;
