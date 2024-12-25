import { LucideIcon } from "lucide-react";
import React from "react";
import { useGetDashboardQuery } from "../redux/state/api";

type cardCustomerProps = {
  title: string;
  primaryIcon: JSX.Element;
  details: StatDetail[];
  dateRange: string;
};

type StatDetail = {
  title: string;
  value: string;
  changePercentage: number;
  IconComponent: LucideIcon;
};

const cardCustomer = ({
  title,
  primaryIcon,
  details,
  dateRange,
}: cardCustomerProps) => {
  const formatPercentage = (percentage: number) => {
    return percentage > 0 ? `+${percentage}%` : `${percentage}%`;
  };

  const getChangeColor = (value: number) => {
    return value > 0 ? "text-green-500" : "text-red-500";
  };

  const { data, isLoading } = useGetDashboardQuery();

  const productData = data?.popularProducts || [];

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
        <div className="rounded-full p-5 bg-blue-50 border-sky-300 border-[1px]">
          {primaryIcon}
        </div>
        <div className="flex-1">
          {details.map((details, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center justify-between my-4">
                <span>{details.title}</span>
                <span>{productData.length}</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default cardCustomer;
