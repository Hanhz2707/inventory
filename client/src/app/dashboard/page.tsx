"use client";
import CardCollaboration from "./cardDeliveryOrder";
import CardSocialMedia from "./cardSocialMedia";
import CardExpenseSummary from "./cardExpenseSummary";
import CardPopularProduct from "./cardPopularProduct";
import CardPurchaseSummary from "./cardPurchaseSummary";
import CardSaleSummary from "./cardSaleSummary";
import CardTasks from "./cardTotalEpmployees";
import CardChart from "./cardChart";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 custom-grid-rows">
      <CardPurchaseSummary />
      <CardSaleSummary />
      <CardSocialMedia/>
      <CardTasks/>
      <CardExpenseSummary />
      <CardChart />
      <CardCollaboration/>
      <CardPopularProduct />
    </div>
  );
};

export default Dashboard;
