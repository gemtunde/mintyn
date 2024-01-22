import React from "react";

type CardProps = {
  title: String;
  pending: String;
  reconciled: String;
  total: String;
  pending_number: String;
  reconciled_number: String;
  total_number: String;
};

const Card = ({
  title,
  pending,
  reconciled,
  total,
  pending_number,
  reconciled_number,
  total_number,
}: CardProps) => {
  return (
    <div className="flex flex-col gap-2 bg-white p-4 mb-4 h-[230px] ">
      <h3 className="text-[14px] font-semibold p-2"> {title}</h3>
      <hr className="border-4 border-green-700 cursor-pointer" />
      <p className="text-sm font-light">
        {" "}
        {pending} : <span className="text-yellow-600">{pending_number}</span>
      </p>
      <p className="text-sm font-light  p-2">
        {" "}
        {reconciled} :{" "}
        <span className="text-green-600">{reconciled_number}</span>
      </p>
      <p className="text-sm font-light  p-2">
        {" "}
        {total} : <span className="text-blue-600">{total_number}</span>
      </p>
    </div>
  );
};

export default Card;
