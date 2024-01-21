"use client";

import React from "react";
import DailyTransactions from "../DailyTransactions";
import Charts from "../Charts";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <main className="flex min-h-screen bg-gray-100 flex-col items-center justify-between p-4">
      <DailyTransactions />
      <div className="flex gap-2 mt-[-130px]">
        <Charts />
        <div className="flex flex-col gap-1"></div>
      </div>
    </main>
  );
};

export default Dashboard;
