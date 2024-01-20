import React from "react";
import DailyTransactions from "../DailyTransactions";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <main className="flex min-h-screen bg-gray-100 flex-col items-center justify-between p-4">
      <DailyTransactions />
    </main>
  );
};

export default Dashboard;
