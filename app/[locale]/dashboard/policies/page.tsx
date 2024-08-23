import PageHeader from "@/components/Dashboard/PageHader";
import React from "react";

const page = () => {
  return (
    <>
      <PageHeader
        title="Policies"
        breadcrumbs={[
          { label: "Policies", href: "/policies" },
          { label: "Policies" },
        ]}
      />
    </>
  );
};

export default page;

export const metadata = {
  title: "Policies",
  description: "Brokers Policies",
};
