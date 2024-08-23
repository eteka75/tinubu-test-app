import PageHeader from "@/components/Dashboard/PageHader";
import React from "react";

const Page = () => {
  return (
    <>
      <PageHeader
        title="Quotation"
        type="DRAFT"
        breadcrumbs={[
          { label: "Quotations", href: "/quotations" },
          { label: "Quotation" },
        ]}
      />
    </>
  );
};

export default Page;

export const metadata = {
  title: "Quotations",
  description: "Brokers quotations",
};
