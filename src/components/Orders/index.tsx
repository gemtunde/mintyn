import React from "react";
import Card from "@/shared/Card";

type Props = {};

const Orders = (props: Props) => {
  return (
    <>
      <Card
        title="Order"
        pending="Pending Orders"
        reconciled="Reconciled Orders"
        total="Total Orders"
        pending_number="20"
        reconciled_number="80"
        total_number="100"
      />
    </>
  );
};

export default Orders;
