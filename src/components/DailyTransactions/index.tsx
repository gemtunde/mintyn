import React from "react";
import { transactions } from "@/utils/transactions";
import Image from "next/image";

type Props = {};

const DailyTransactions = (props: Props) => {
  return (
    <div className="flex gap-2 p-2">
      {transactions.map((transaction, index) => (
        <div
          key={transaction.id}
          className="flex bg-white items-center justify-between px-4 py-2 m-1"
        >
          <div className="flex flex-col">
            <p className="text-gray-300 font-normal text-[14px]">
              {transaction.name}
            </p>
            <h3>{transaction.value}</h3>
          </div>
          <Image src={transaction.icon} className="p-2" alt="icon" />
        </div>
      ))}
    </div>
  );
};

export default DailyTransactions;
