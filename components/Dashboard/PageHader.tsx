"use client";

import React from "react";
import {
  Breadcrumbs,
  Typography,
  Link as MUILink,
  Chip,
  Grid,
} from "@mui/material";
import { useRouter } from "next/navigation";
import NextLink from "next/link";
import { IoMdHome } from "react-icons/io";
import ActionMenu from "./ActionMenu";

interface PageHeaderProps {
  title: string;
  breadcrumbs: { label: string; href?: string }[];
  type?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  breadcrumbs,
  type,
}) => {
  const router = useRouter();

  return (
    <>
      <Grid container spacing={4} sx={{ py: 0 }}>
        <Grid item xs={9}>
          <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 0, mt: 0, py: 0 }}>
            <MUILink
              href="/dashboard"
              color="inherit"
              sx={{ cursor: "pointer", textDecoration: "none" }}
            >
              <IoMdHome />
            </MUILink>

            {breadcrumbs.map((crumb, index) => (
              <MUILink
                key={index}
                component={NextLink}
                href={crumb.href || "#"}
                color="inherit"
                sx={{ cursor: "pointer", textDecoration: "none" }}
              >
                {crumb.label}
              </MUILink>
            ))}
          </Breadcrumbs>
          <Typography
            variant="h4"
            component="h4"
            sx={{ fontWeight: "bold", mb: 2 }}
          >
            {title} {type && <Chip label={type} sx={{ fontSize: "10px" }} />}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <ActionMenu />
        </Grid>
      </Grid>
    </>
  );
};

export default PageHeader;
