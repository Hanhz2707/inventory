import { LucideIcon } from "lucide-react";
import React from "react";

/**
 * Type for the props of the CardTasks component
 */
type CardTasksProps = {
  title: string;
  primaryIcon: JSX.Element;
  stats: TaskStat[];
  dateRange: string;
};

/**
 * Type for the TaskStatArray for the CardTasks component
 */
type TaskStat = {
  title: string;
  value: string | number;
  icon?: LucideIcon;
};

/**
 * CardTasks component
 *
 * @param title - The title of the card
 * @param primaryIcon - The primary icon of the card
 * @param stats - The stats to display in the card
 * @param dateRange - The date range for the stats
 *
 * @returns The CardTasks component
 */
const CardTasks = ({
  title,
  primaryIcon,
  stats,
  dateRange,
}: CardTasksProps) => {
  return (
    <div className="row-span-3 xl:row-span-2 bg-white shadow-md rounded-2xl flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center mb-2 px-5 pt-4">
          <h2 className="font-semibold text-lg text-gray-700">{title}</h2>
          <span className="text-xs text-gray-400">{dateRange}</span>
        </div>
        <hr />
      </div>

      <div className="flex mb-6 items-center justify-around gap-4 px-5">
        <div className="rounded-full p-5 bg-yellow-50 border-yellow-300 border-[1px]">
          {primaryIcon}
        </div>
        <div className="flex-1">
          {stats.map((stat, index) => (
            <div key={index} className="flex items-center justify-between my-4">
              <span className="text-gray-700 flex items-center gap-2">
                {stat.icon && <stat.icon size={16} className="text-gray-500" />}
                {stat.title}
              </span>
              <span className="font-semibold">{stat.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardTasks;
