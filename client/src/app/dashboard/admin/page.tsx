"use client";
import PaymentChart from "@/components/PaymentChart";
import PostChart from "@/components/PostChart";
import StatsCard from "@/components/StatsCard";
import { format } from "date-fns";
import React from "react";
import { FaUser, FaPen, FaTags } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import {
  fetchAnalyticsData,
  fetchPaymentMetrics,
  fetchPostMetrics,
} from "@/services/apiAnalytics";
import Spinner from "@/components/Spinner";

const Page = () => {
  const { data: analyticsData, isLoading: isLoadingAnalytics } = useQuery({
    queryKey: ["analyticsData"],
    queryFn: () => fetchAnalyticsData(),
  });

  const { data: postMetrics, isLoading: isLoadingPosts } = useQuery({
    queryKey: ["postMetrics"],
    queryFn: () => fetchPostMetrics(),
  });

  const { data: paymentMetrics, isLoading: isLoadingPayments } = useQuery({
    queryKey: ["paymentMetrics"],
    queryFn: () => fetchPaymentMetrics(),
  });

  if (isLoadingAnalytics || isLoadingPosts || isLoadingPayments) {
    return <Spinner />;
  }

  const postDates = postMetrics?.map((item: { date: string }) =>
    format(new Date(item.date), "MMM d")
  );

  const postCounts = postMetrics?.map(
    (item: { postCount: number }) => item.postCount
  );
  const commentCounts = postMetrics?.map(
    (item: { commentCount: number }) => item.commentCount
  );

  const postChartConfig = {
    labels: postDates,
    datasets: [
      {
        label: "Posts Created",
        data: postCounts,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Comments Written",
        data: commentCounts,
        backgroundColor: "rgba(153, 102, 255, 0.6)",
        borderColor: "rgba(153, 102, 255, 1)",
        borderWidth: 1,
      },
    ],
  };

  const paymentDates = paymentMetrics?.map((item: { date: string }) =>
    format(new Date(item.date), "MMM d")
  );
  const paymentChartConfig = {
    labels: paymentDates,
    datasets: [
      {
        label: "Payments Received",
        data: paymentMetrics?.map(
          (item: { totalAmount: number }) => item.totalAmount
        ),
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10">
        <StatsCard
          title="Users"
          value={analyticsData?.user}
          icon={<FaUser />}
          borderColor="border-blue-500"
          textColor="text-blue-500"
        />
        <StatsCard
          title="Posts"
          value={analyticsData?.post}
          icon={<FaPen />}
          borderColor="border-green-500"
          textColor="text-green-500"
        />
        <StatsCard
          title="Categories"
          value={analyticsData?.category}
          icon={<FaTags />}
          borderColor="border-yellow-500"
          textColor="text-yellow-500"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-secondary-background rounded-lg shadow-lg p-3 lg:p-5">
          <h3 className="text-lg font-semibold mb-4">Post Metrics</h3>
          <PostChart chartData={postChartConfig} />
        </div>
        <div className="bg-secondary-background rounded-lg shadow-lg p-3 lg:p-5">
          <h3 className="text-lg font-semibold mb-4">Payment Metrics</h3>
          <PaymentChart chartData={paymentChartConfig} />
        </div>
      </div>
    </section>
  );
};

export default Page;
