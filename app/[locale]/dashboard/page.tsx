import BrokerSearch from "@/components/BrokerSearch";
import MenuTabs from "@/components/Dashboard/MenuTabs";
import PageHeader from "@/components/Dashboard/PageHader";
import ProductDetails from "@/components/ProductDetails";
import SubmissionDetails from "@/components/SubmissionDetails";
import { SelectedProduct, SelectedSubmission } from "@/src/utils/constants";
import { Grid, Paper, Typography } from "@mui/material";
import { useTranslations } from "next-intl";
import React from "react";

const Page = () => {
  const t = useTranslations("BrokerPage");

  return (
    <>
      <PageHeader
        title="Proposal 20231018-1"
        type="DRAFT"
        breadcrumbs={[
          { label: "Quotations", href: "/quotations" },
          { label: "Quotation #54f47ac10b-58cc-4372-a567-0e02b2c3d479" },
        ]}
      />
      <Grid container spacing={4}>
        <Grid item xs={9}>
          <MenuTabs />
          <BrokerSearch />
        </Grid>
        <Grid item xs={3}>
          <Paper
            sx={{
              padding: 2,
              mb: 2,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {t("quotation_overview")}
            </Typography>
            <ProductDetails product={SelectedProduct} />
          </Paper>
          <Paper
            sx={{
              padding: 2,
              mb: 2,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {t("submission_overview")}
            </Typography>
            <SubmissionDetails submission={SelectedSubmission} />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Page;

export const metadata = {
  title: "Dashbaord",
  description: "Managing Brokers",
};
