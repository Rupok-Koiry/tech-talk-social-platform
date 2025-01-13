"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";
import { FaChevronRight } from "react-icons/fa";
import Spinner from "./Spinner";
import Link from "next/link";

const RecentPosts = () => {
  const [recentPosts, setRecentPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/posts?sort=-createdAt&limit=5`
        );
        setRecentPosts(response.data.data);
      } catch (error) {
        console.error("Error fetching recent posts:", error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <div className="bg-secondary-background p-6 shadow rounded-lg">
      <h2 className="text-xl font-semibold text-primary-text mb-4">
        Recent Posts
      </h2>
      {isLoading ? (
        <div className="flex justify-center w-full">
          <Spinner />
        </div>
      ) : (
        <ul className="space-y-4">
          {recentPosts.map(
            (post: { _id: string; title: string; createdAt: string }) => (
              <li
                key={post._id}
                className="flex items-center gap-3 group hover:bg-primary-background hover:shadow-md rounded-md p-3 transition duration-200 ease-in-out"
              >
                <div className="flex-grow">
                  <h3 className="text-md font-semibold text-primary-text group-hover:text-primary-orange">
                    {post.title}
                  </h3>
                  <p className="text-sm text-secondary-text">
                    {format(new Date(post.createdAt), "MMMM dd, yyyy")}
                  </p>
                </div>
                <Link href={`/posts/${post._id}`}>
                  <FaChevronRight className="text-secondary-text group-hover:text-primary-blue transition duration-200" />
                </Link>
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
};

export default RecentPosts;
