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
      className={`relative bg-white rounded-lg shadow-lg p-6 border-l-4 ${borderColor} transition-transform transform hover:scale-105 hover:shadow-xl`}
    >
      <div className={`flex items-center justify-between mb-4`}>
        <div className={`text-3xl ${textColor}`}>{icon}</div>
        <div className="bg-gray-200 rounded-full p-2 shadow-sm">{icon}</div>
      </div>
      <h3 className={`text-xl font-semibold text-gray-800 ${textColor}`}>
        {title}
      </h3>
      <p className={`text-4xl font-bold ${textColor} mt-2`}>{value}</p>
      <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-blue-100 to-green-100 opacity-20"></div>
    </div>
  );
};

export default StatsCard;
