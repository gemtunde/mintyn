import React from "react";
import DataTable from "react-data-table-component";

type Props = {};

const Tables = (props: Props) => {
  const columns = [
    {
      name: "Item Type",
      selector: (row: { name: any }) => row.name,
      sortable: true,
    },
    {
      name: "Price",
      selector: (row: { price: any }) => row.price,
      sortable: true,
    },
    {
      name: "Transaction No.",
      selector: (row: { transaction: any }) => row.transaction,
      sortable: true,
    },
    {
      name: "Time",
      selector: (row: { time: any }) => row.time,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row: { status: any }) => row.status,
      sortable: true,
    },
  ];

  const data = [
    {
      id: 1,
      name: "Apple MAcbook 15' 230 SSD 280GB ",
      price: "344",
      transaction: "23345353333",
      time: "05:23",
      status: "pending",
    },
    {
      id: 2,
      name: "Apple MAcbook 15' 230 SSD 280GB ",
      price: "224",
      transaction: "000345353333",
      time: "15:23",
      status: "reconciled",
    },
    {
      id: 3,
      name: "Apple MAcbook 15' 230 SSD 280GB ",
      price: "90344",
      transaction: "3323345353333",
      time: "12:23",
      status: "unreconciled",
    },
    {
      id: 4,
      name: "Apple MAcbook 15' 230 SSD 280GB ",
      price: "5544",
      transaction: "23345353333",
      time: "14:23",
      status: "reconciled",
    },
    {
      id: 5,
      name: "Apple MAcbook 15' 230 SSD 280GB ",
      price: "444",
      transaction: "6665353333",
      time: "10:23",
      status: "unreconciled",
    },
    {
      id: 6,
      name: "Apple MAcbook 15' 230 SSD 280GB ",
      price: "744",
      transaction: "77777333",
      time: "07:23",
      status: "pending",
    },
  ];
  return (
    <>
      <h1 className="text-2xl font-semibold p-2">Payments</h1>

      <DataTable
        columns={columns}
        data={data}
        selectableRows
        pagination
        paginationPerPage={5}
        fixedHeader
      />
    </>
  );
};

export default Tables;
