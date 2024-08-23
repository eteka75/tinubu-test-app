import PageHeader from "@/components/Dashboard/PageHader";
import React from "react";

const Page = () => {
  return (
    <PageHeader
      title="Audit logs"
      breadcrumbs={[
        { label: "Policies", href: "/audit-logs" },
        { label: "Policies" },
      ]}
    />
  );
};

export default Page;

export const metadata = {
  title: "Audit logs",
  description: "Brokers logs",
};
