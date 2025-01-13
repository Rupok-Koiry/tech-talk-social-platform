"use client";
import ErrorMessage from "@/components/ErrorMessage";
import Greeting from "@/components/Greeting";
import Post from "@/components/Post";
import PublishPost from "@/components/PublishPost";
import RecentPosts from "@/components/RecentPosts";
import SearchFilter from "@/components/SearchFilter";
import Spinner from "@/components/Spinner";
import TopFollowers from "@/components/TopFollowers";
import WeatherWidget from "@/components/WeatherWidget";
import { usePosts } from "@/hooks/posts/usePosts";
import React from "react";
import InfiniteScroll from "react-infinite-scroller";

const Feeds = () => {
  const { posts, isLoading, fetchNextPage, hasNextPage } = usePosts();

  return (
    <div className="container mx-auto bg-primary-background px-5 py-4 mb-auto">
      <div className="grid grid-cols-1 xl:grid-cols-4 xl:gap-6 gap-y-6">
        {/* Left Sidebar */}
        <div className=" space-y-6 order-2 lg:order-1 md:col-span-1">
          <div className="bg-secondary-background rounded-lg p-4 shadow">
            <WeatherWidget />
          </div>
          <TopFollowers />
        </div>

        {/* Main Content */}
        <div className="space-y-6 order-3 lg:order-2 lg:col-span-2">
          <div className="bg-secondary-background rounded-lg p-4 shadow">
            <PublishPost />
          </div>
          <SearchFilter />
          {isLoading ? (
            <Spinner className="my-4" />
          ) : posts?.length === 0 ? (
            <ErrorMessage message={"No Posts Found"} />
          ) : (
            <InfiniteScroll
              key={posts?.length}
              pageStart={1}
              loadMore={() => fetchNextPage()}
              hasMore={hasNextPage}
              loader={<Spinner className="my-4" />}
            >
              <div className="flex flex-col gap-4">
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {posts?.map((post: any) => (
                  <Post key={post._id} post={post} />
                ))}
                {!hasNextPage && (
                  <div className="text-center text-gray-500 text-sm">
                    You have reached the end!
                  </div>
                )}
              </div>
            </InfiniteScroll>
          )}
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6 order-1 lg:order-3">
          <Greeting />
          <RecentPosts />
        </div>
      </div>
    </div>
  );
};

export default Feeds;
