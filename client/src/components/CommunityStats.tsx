import { fetchAnalyticsData } from "@/services/apiAnalytics";
import { useQuery } from "@tanstack/react-query";
import { FaUsers, FaComments, FaThLarge } from "react-icons/fa";

const CommunityStats = () => {
  const { data: analyticsData } = useQuery({
    queryKey: ["analyticsData"],
    queryFn: () => fetchAnalyticsData(),
  });
  const stats = [
    {
      icon: <FaUsers size={42} className="text-primary-blue" />,
      title: "Users",
      count: analyticsData?.user ?? 0,
      description: "Engaged members contributing to our community.",
    },
    {
      icon: <FaComments size={42} className="text-primary-red" />,
      title: "Posts",
      count: analyticsData?.post ?? 0,
      description: "Active discussions and valuable insights shared daily.",
    },
    {
      icon: <FaThLarge size={42} className="text-primary-blue" />,
      title: "Categories",
      count: analyticsData?.category ?? 0,
      description: "Diverse topics to explore and contribute to.",
    },
  ];

  return (
    <section className="md:py-10 py-12 container mx-auto px-5 bg-secondary-background my-12 md:my-10  rounded-lg">
      <div className=" mx-auto px-5">
        <h2 className="text-3xl font-semibold text-center text-primary-text mb-8">
          Community Statistics
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 lg:w-1/4 bg-primary-background shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105"
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <h3 className="text-xl font-semibold text-primary-text mb-2">
                {stat.title}
              </h3>
              <p className="text-4xl font-semibold text-primary-orange">
                {stat.count}
              </p>
              <p className="text-sm text-secondary-text mt-2">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityStats;
