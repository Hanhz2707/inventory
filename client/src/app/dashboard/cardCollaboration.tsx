import React from "react";

type CardCollaborationProps = {
  title: string;
  primaryIcon: JSX.Element;
  stats: CollaborationStat[];
  dateRange: string;
};

type CollaborationStat = {
  title: string;
  value: string | number;
  trendPercentage?: number; // Optional for trend changes
};

const CardCollaboration = ({
  title,
  primaryIcon,
  stats,
  dateRange,
}: CardCollaborationProps) => {
  const formatPercentage = (percentage?: number) =>
    percentage != null
      ? percentage > 0
        ? `+${percentage}%`
        : `${percentage}%`
      : "N/A";

  const getTrendColor = (value?: number) =>
    value != null && value > 0 ? "text-green-500" : "text-red-500";

  return (
    <div className="md:row-span-1 xl:row-span-2 bg-white col-span-1 shadow-md rounded-2xl flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center mb-2 px-5 pt-4">
          <h2 className="font-semibold text-lg text-gray-700">{title}</h2>
          <span className="text-xs text-gray-400">{dateRange}</span>
        </div>
        <hr />
      </div>

      <div className="flex mb-6 items-center justify-around gap-4 px-5">
        <div className="rounded-full p-5 bg-purple-50 border-purple-300 border-[1px]">
          {primaryIcon}
        </div>
        <div className="flex-1">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center justify-between my-4">
              <span className="text-gray-700">{stat.title}</span>
              <span className="flex items-center gap-2">
                <span className="font-semibold">{stat.value}</span>
                {stat.trendPercentage != null && (
                  <span className={getTrendColor(stat.trendPercentage)}>
                    {formatPercentage(stat.trendPercentage)}
                  </span>
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardCollaboration;
