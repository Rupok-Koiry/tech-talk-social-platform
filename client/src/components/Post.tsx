import Image from "next/image";
import React from "react";
import PostMedia from "./PostMedia";
import PostAuthor from "./PostAuthor";
import Link from "next/link";
import { useMe } from "@/hooks/auth/useMe";
import { FaStar } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Post = ({ post }: any) => {
  const { user } = useMe();

  const isPremium = post.isPremium;
  const canAccessPremium =
    user?.isVerified || user?.role === "admin" || user?._id === post.author._id;

  return (
    <div
      className={`bg-white rounded-lg p-6 shadow-lg transition-all duration-300 ${
        isPremium
          ? "border-2 border-yellow-400 hover:shadow-xl"
          : "hover:shadow-md"
      }`}
    >
      <div className="flex justify-between items-start mb-4">
        <PostAuthor author={post.author} postCreatedAt={post.createdAt} />
        {isPremium && (
          <div className="flex items-center space-x-1 bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-sm font-semibold">
            <FaStar size={16} />
            <span>Premium</span>
          </div>
        )}
      </div>
      <Link
        href={
          !canAccessPremium && post.isPremium
            ? "/dashboard/user/payment"
            : `/post/${post._id}`
        }
      >
        <div className="mt-4">
          <h2 className="text-xl font-bold text-gray-800">{post.title}</h2>
        </div>
        <div className="mt-4 bg-primary-background rounded-lg overflow-hidden relative">
          <Image
            className="w-full h-64 object-contain"
            src={post.images[0]}
            alt="Post image"
            width={500}
            height={300}
          />
          {isPremium && !canAccessPremium && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-white text-center">
                <IoMdLock className="mx-auto mb-2" size={24} />
                <p className="font-semibold">Premium Content</p>
                <p className="text-sm">Verify your account to access</p>
              </div>
            </div>
          )}
        </div>
      </Link>
      <button className="bg-primary-background rounded-lg py-1 px-2 my-3">
        Category:{" "}
        <span className="font-semibold text-primary-text italic text-sm">
          {post.category.name}
        </span>
      </button>
      <PostMedia
        postUpvotes={post.upvotes}
        postDownvotes={post.downvotes}
        postId={post._id}
        totalComments={post.totalComments}
      />
    </div>
  );
};

export default Post;
