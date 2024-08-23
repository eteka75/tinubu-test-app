"use client";

import React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import { IoNotifications, IoSearchCircleOutline } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";
import { PiUserCircleFill } from "react-icons/pi";
import { Button, Link } from "@mui/material";
import { HiSearch } from "react-icons/hi";
import NextLink from "next/link";
import LangSwitcher from "./LangSwitcher";
import { useTranslations } from "next-intl";

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
  backgroundColor: "rgba(255, 255, 255, 0.37)",
  borderRadius: theme.shape.borderRadius,
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
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

const TopNav = () => {
  const t = useTranslations("BrokerPage");

  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor: "var(--primary-color)", boxShadow: "none" }}
    >
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <NextLink href={"/"} style={{ textDecoration: "none" }}>
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "white" }}
              >
                Tinubu
              </Typography>
            </NextLink>
            <Typography
              variant="body2"
              sx={{
                fontWeight: "light",
                fontSize: "10px",
                ml: 2,
                color: "white",
                letterSpacing: "2px",
              }}
            >
              {t("Crédit solution Vanilla")}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              borderRadius: 1,
              padding: "0 8px",
            }}
          >
            <Box
              sx={{
                position: "relative",
                display: "flex",
                alignItems: "center",
              }}
            >
              <SearchIconWrapper>
                <HiSearch color="white" size={15} />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Box>

            <Link
              href={"#"}
              sx={{
                mx: 1,
                p: 1,
                borderRadius: 1,
                color: "white",
                backgroundColor: "transparent",
                "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
              }}
            >
              <IoIosStar size={22} />
            </Link>
            <Link
              href={"#"}
              sx={{
                mx: 0,
                p: 1,
                borderRadius: 1,
                color: "white",
                backgroundColor: "transparent",
                "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.1)" },
              }}
            >
              <IoNotifications size={22} style={{ color: "white" }} />
            </Link>
            <LangSwitcher color="white" />

            <Link href={"#"} style={{ color: "white" }}>
              <PiUserCircleFill size={40} />
            </Link>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default TopNav;
