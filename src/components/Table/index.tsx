import React, { useState } from "react";
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
      selector: (row: { status: any }) =>
        row.status === "pending" ? (
          <p className="text-yellow-600 p-2 border border-gray-400 rounded-full">
            Pending
          </p>
        ) : row.status === "reconciled" ? (
          <p className="text-green-600 p-2 border border-gray-400 rounded-full">
            Reconciled
          </p>
        ) : (
          <p className="text-gray-600 p-2 border border-gray-400 rounded-full">
            Un-Reconciled
          </p>
        ),
      sortable: true,
    },
  ];

  const data = [
    {
      id: 1,
      name: "Samsung Lite 15' 230 SSD 280GB ",
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
      name: "Nokia 1215' 230 SSD 280GB ",
      price: "90344",
      transaction: "3323345353333",
      time: "12:23",
      status: "unreconciled",
    },
    {
      id: 4,
      name: "Infinix Pro' 230 SSD 280GB ",
      price: "5544",
      transaction: "23345353333",
      time: "14:23",
      status: "reconciled",
    },
    {
      id: 5,
      name: "Iphone 15' 230 SSD 280GB ",
      price: "444",
      transaction: "6665353333",
      time: "10:23",
      status: "unreconciled",
    },
    {
      id: 6,
      name: "Galaxy Notebook 15' 230 SSD 280GB ",
      price: "744",
      transaction: "77777333",
      time: "07:23",
      status: "pending",
    },
  ];

  const [records, setRecords] = useState(data);

  const handleFilter = (event: any) => {
    const filterData = data.filter((item) =>
      item.name.toLowerCase().includes(event.target.value)
    );
    setRecords(filterData);
  };
  return (
    <>
      <h1 className="text-2xl font-semibold p-2">Payments</h1>
      <div className="flex items-center justify-between">
        <div className="my-2 py-2 w-[60%]">
          <input
            type="text"
            placeholder="Search payments"
            onChange={handleFilter}
            className="p-2 w-[50%] border-b-2 border-gray-300 bg-inherit outline-none"
          />
        </div>
        <div className="my-2 p-2 w-[30%]">
          <label>Show</label>
          <select className="p-2 bg-inherit outline-none">
            <option> All</option>
            <option> Pending</option>
            <option> Reconciled</option>
            <option> Un-Reconciled</option>
          </select>
        </div>
      </div>
      <DataTable
        columns={columns as any}
        data={records}
        selectableRows
        pagination
        paginationPerPage={5}
        fixedHeader
      />
    </>
  );
};

export default Tables;
