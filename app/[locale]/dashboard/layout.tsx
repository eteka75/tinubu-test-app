import React from "react";
import { Box, Toolbar } from "@mui/material";
import TopNav from "@/components/Dashboard/TopNav";
import Sidebar from "@/components/Dashboard/Sidebar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <TopNav />

      <Box sx={{ display: "flex", flexGrow: 1 }}>
        <Sidebar />

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            ml: "240px",
            overflow: "auto",
          }}
        >
          <Toolbar />
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardLayout;
