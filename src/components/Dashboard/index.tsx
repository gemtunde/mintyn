"use client";

import React from "react";
import DailyTransactions from "../DailyTransactions";
import Charts from "../Charts";
import Orders from "../Orders";
import Payment from "../Payment";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <main className="flex bg-gray-100 flex-col items-center justify-between p-4">
      <DailyTransactions />
      <div className="flex items-center gap-1">
        <div className="flex-4 bg-white">
          <Charts />
        </div>
        <div className="flex w-[390px] h-[450px] flex-col gap-1 p-4">
          <Orders />
          <Payment />
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
