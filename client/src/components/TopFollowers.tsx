"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import PostAuthor from "./PostAuthor";

const TopFollowers = () => {
  const [topUsers, setTopUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/users/top-followers?sort=-followers.length&limit=5`
        );
        setTopUsers(response.data.data);
      } catch (error) {
        console.error("Error fetching top followers:", error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <div className="bg-secondary-background p-6 shadow rounded-lg">
      <h2 className="text-xl font-semibold text-primary-text mb-4">
        Top Followers
      </h2>
      {isLoading ? (
        <div className="flex justify-center w-full">
          <Spinner />
        </div>
      ) : (
        <ul className="space-y-4">
          {topUsers.map(
            (user: {
              _id: string;
              name: string;
              profilePic: string;
              followers: string[];
            }) => (
              <li
                key={user._id}
                className="flex items-center gap-3 group hover:bg-primary-background hover:shadow-md rounded-md p-3 transition duration-200 ease-in-out"
              >
                <PostAuthor
                  author={user}
                  followers={`${user.followers.length} Followers`}
                />
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
};

export default TopFollowers;
