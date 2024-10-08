import BrokerSearch from "@/components/BrokerSearch";
import LangSwitcher from "@/components/Dashboard/LangSwitcher";
import { Box, Button, Container } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Link href={"/en/dashboard"}>
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
