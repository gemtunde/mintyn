import React from "react";
import Card from "@/shared/Card";

type Props = {};

const Payment = (props: Props) => {
  return (
    <>
      <Card
        title="Payments"
        pending="Un-reconciled Payments"
        reconciled="Reconciled Payments"
        total="Total Payments"
        pending_number="20"
        reconciled_number="80"
        total_number="100"
      />
    </>
  );
};

export default Payment;
