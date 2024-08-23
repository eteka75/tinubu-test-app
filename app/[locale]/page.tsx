"use client";
import BrokerSearch from "@/components/BrokerSearch";
import LangSwitcher from "@/components/Dashboard/LangSwitcher";
import { getCurrentLocaleFromPath } from "@/src/utils/fn";
import { Box, Button, Container } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [locale, setCurrentLocale] = useState<string | null>("/");

  useEffect(() => {
    const path = window.location.pathname;
    setCurrentLocale(getCurrentLocaleFromPath(path));
  }, []);
  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Link href={`${locale}/dashbaord`}>
          <Button>Dashboard</Button>
        </Link>
        <Box>
          <LangSwitcher color="inherit" />
        </Box>
      </Box>
      <BrokerSearch />
    </Container>
  );
}
