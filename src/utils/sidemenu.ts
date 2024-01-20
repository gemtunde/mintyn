import Overview from "@/asset/icons/Overview.svg";

export const menus = [
  {
    id: 1,
    name: "Main",
    submenus: [
      {
        subId: 1,
        subName: "Overview",
        path: "/",
        icon: Overview,
      },
    ],
  },
  {
    name: "Payments",
    submenus: [
      {
        subId: 1,
        subName: "All Payments",
        path: "/",
        icon: Overview,
      },
      {
        subId: 2,
        subName: "Reconcilled Payments",
        path: "/",
        icon: Overview,
      },
      {
        subId: 3,
        subName: "Un-Reconcilled Payments",
        path: "/",
        icon: Overview,
      },
      {
        subId: 4,
        subName: "Manual Settlement",
        path: "/",
        icon: Overview,
      },
    ],
  },
  {
    name: "Orders",
    submenus: [
      {
        subId: 1,
        subName: "All Orders",
        path: "/",
        icon: Overview,
      },
      {
        subId: 2,
        subName: "Reconcilled Orders",
        path: "/",
        icon: Overview,
      },
      {
        subId: 3,
        subName: "Pending Orders",
        path: "/",
        icon: Overview,
      },
      {
        subId: 4,
        subName: "Manual Settlement",
        path: "/",
        icon: Overview,
      },
    ],
  },
  {
    id: 1,
    name: "Profile",
    submenus: [
      {
        subId: 1,
        subName: "Merchant Profile",
        path: "/",
        icon: Overview,
      },
    ],
  },
];
