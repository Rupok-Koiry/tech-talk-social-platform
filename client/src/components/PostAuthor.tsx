/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect, useCallback } from "react";
import { formatDistanceToNow } from "date-fns";
import Image from "next/image";
import { useUpdateMe } from "@/hooks/auth/useUpdateMe";
import { useUpdateUser } from "@/hooks/users/useUpdateUser";
import { useMe } from "@/hooks/auth/useMe";
import { FiUserPlus, FiUserMinus } from "react-icons/fi";
import toast from "react-hot-toast";

/* interface Author {
  _id: string;
  name: string;
  profilePic: string;
  email: string;
  followers: Array<{
    _id: string;
    name: string;
    email: string;
    profilePic: string;
  }>;
  following: Array<{
    _id: string;
    name: string;
    email: string;
    profilePic: string;
  }>;
}
 */
interface PostAuthorProps {
  author: any;
  postCreatedAt?: string;
  followers?: string;
}

const PostAuthor: React.FC<PostAuthorProps> = ({
  author,
  postCreatedAt,
  followers,
}) => {
  const { user } = useMe();
  const { updateUser: updateCurrentUser } = useUpdateMe();
  const { updateUser } = useUpdateUser();
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    setIsFollowing(
      user?.following?.some(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (followedUser: any) => followedUser._id === author._id
      ) || false
    );
  }, [user?.following, author._id]);

  const handleFollowUnfollow = useCallback(() => {
    if (!user) return;

    const newFollowing = isFollowing
      ? user.following.filter(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (followedUser: any) => followedUser._id !== author._id
        )
      : [
          ...(user.following || []),
          {
            _id: author._id,
            name: author.name,
            email: author.email,
            profilePic: author.profilePic,
          },
        ];

    const newFollowers = isFollowing
      ? author.followers.filter((follower: any) => follower._id !== user._id)
      : [
          ...(author.followers || []),
          {
            _id: user._id,
            name: user.name,
            email: user.email,
            profilePic: user.profilePic,
          },
        ];

    updateCurrentUser(
      { following: newFollowing },
      {
        onSuccess: () => {
          toast.success(
            `Successfully ${isFollowing ? "unfollowed" : "followed"} ${
              author.name
            }`
          );
        },
      }
    );
    updateUser({
      userId: author._id,
      newUser: { followers: newFollowers },
    });

    setIsFollowing(!isFollowing);
  }, [isFollowing, user, author, updateCurrentUser, updateUser]);

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-3">
      <div className="flex items-center space-x-4">
        <Image
          className="w-10 h-10 rounded-full object-cover"
          src={author.profilePic}
          alt={`${author.name}'s profile picture`}
          width={40}
          height={40}
        />
        <div>
          <div className="font-semibold">{author.name}</div>
          <div className="text-xs text-gray-500">
            {postCreatedAt &&
              formatDistanceToNow(new Date(postCreatedAt), { addSuffix: true })}
            {followers && <span>{followers}</span>}
          </div>
        </div>
      </div>
      {user && user._id !== author._id && (
        <button
          onClick={handleFollowUnfollow}
          className=" px-2 md:px-3 text-sm md:text-base py-1 bg-primary-blue text-primary-background rounded-md border border-primary-blue items-center
          hover:bg-primary-background hover:text-primary-blue hover:border-primary-blue transition ease-in-out duration-300 flex space-x-2
          "
        >
          {isFollowing ? <FiUserMinus /> : <FiUserPlus />}
          <span>{isFollowing ? "Unfollow" : "Follow"}</span>
        </button>
      )}
    </div>
  );
};

export default PostAuthor;
