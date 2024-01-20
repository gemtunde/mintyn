"use client";

import React from "react";
import Link from "next/link";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";

import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";

import InputBase from "@mui/material/InputBase";
type Props = {};

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Header = (props: Props) => {
  return (
    <nav className="sticky z-50 top-[0.5px] flex flex-row flex-wrap items-center bg-white justify-between shadow-lg">
      <div className="ml-[22px]">
        <h2 className="text-[1.5rem] text-primary-main leading-[48px] font-bold tracking-[-1px] pb-8px">
          TransMonitor
        </h2>
      </div>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
      <div className="flex mt-[3px] mx-4 w-[30%] items-center justify-between px-2 py-2 xl:gap-2">
        <Link href="/" className="cursor-pointer text-gray-600">
          Support
        </Link>
        <Link href="/" className="cursor-pointer text-gray-600">
          FAQ
        </Link>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="primary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <div className="flex">
          <div className="flex flex-col p-2">
            <p className=" text-gray-600 text-right text-[14px]">Hello</p>
            <h4 className=" text-gray-600 text-[14px]">Oluwaleke Ojo</h4>
          </div>
          <IconButton sx={{ p: 0 }}>
            <Avatar
              alt="logo"
              src="https://mui.com/static/images/avatar/2.jpg"
            />
          </IconButton>
        </div>
      </div>
    </nav>
  );
};

export default Header;
