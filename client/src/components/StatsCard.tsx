type StatsCardProps = {
  title: string;
  value: string;
  borderColor: string;
  textColor: string;
  icon: React.ReactNode;
};

const StatsCard = ({
  title,
  value,
  icon,
  borderColor,
  textColor,
}: StatsCardProps) => {
  return (
    <div
      className={`relative bg-secondary-background rounded-lg shadow p-6 border-l-4 ${borderColor} transition-transform transform hover:scale-105 hover:shadow-xl`}
    >
      <div className={`flex items-center justify-between mb-4`}>
        <div className={`text-3xl ${textColor}`}>{icon}</div>
        <div className="bg-primary-background rounded-full p-2 shadow">
          {icon}
        </div>
      </div>
      <h3 className={`text-xl font-semibold text-gray-800 ${textColor}`}>
        {title}
      </h3>
      <p className={`text-4xl font-bold ${textColor} mt-2`}>{value}</p>
    </div>
  );
};

export default StatsCard;
