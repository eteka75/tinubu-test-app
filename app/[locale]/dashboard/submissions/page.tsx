import PageHeader from "@/components/Dashboard/PageHader";
import React from "react";

const Page = () => {
  return (
    <>
      <PageHeader
        title="Submissions"
        type="DRAFT"
        breadcrumbs={[
          { label: "Submission", href: "/submissions" },
          { label: "Submissions" },
        ]}
      />
    </>
  );
};

export default Page;

export const metadata = {
  title: "Submissions",
  description: "Brokers submissions",
};
