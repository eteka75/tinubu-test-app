"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Tabs, { tabsClasses } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useTranslations } from "next-intl";

const MenuTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const t = useTranslations("MenuTabs");

  return (
    <Box
      sx={{
        flexGrow: 1,
        mb: 3,
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        scrollButtons
        aria-label="visible arrows tabs example"
        sx={{
          [`& .${tabsClasses.scrollButtons}`]: {
            "&.Mui-disabled": { opacity: 0.3 },
          },
          "& .MuiTabs-indicator": {
            backgroundColor: "var(--primary-color)",
          },
          "& .MuiTab-root.Mui-selected": {
            color: "var(--primary-color)",
          },
        }}
      >
        <Tab label={t("parties")} />
        <Tab label={t("coverage")} />
        <Tab label={t("premium")} />
        <Tab label={t("fees")} />
        <Tab label={t("dictionnary")} />
        <Tab label={t("credit_limit")} />
        <Tab label={t("claim")} />
        <Tab label={t("political_risk")} />
      </Tabs>
    </Box>
  );
};

export default MenuTabs;
