"use client";

import React, { useEffect, useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useTranslations } from "next-intl";
import { MENU_ITEMS } from "@/src/utils/constants";
import Link from "next/link";
import { useLocale } from "@/src/context/LocaleContext";
import { getCurrentLocaleFromPath } from "@/src/utils/fn";

const Sidebar = () => {
  const t = useTranslations("DashabordMenu");
  const [locale, setCurrentLocale] = useState<string | null>(null);

  useEffect(() => {
    const path = window.location.pathname;
    setCurrentLocale(getCurrentLocaleFromPath(path));
  }, []);

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        position: "fixed",
        top: "64px",
        height: "calc(100vh - 64px)",
        backgroundColor: "var(--dark-color)",
        color: "var(--text-primary)",
        [`& .MuiDrawer-paper`]: {
          width: 240,
          boxSizing: "border-box",
          height: "100%",
          backgroundColor: "var(--dark-color)",
          color: "var(--text-primary)",
        },
      }}
    >
      <List sx={{ pt: "90px" }}>
        {MENU_ITEMS.map((item) => (
          <ListItem
            button
            key={item.key}
            sx={{
              "&:hover": {
                backgroundColor: "var(--background-hover)",
              },
            }}
            component={Link}
            href={`/${locale}${item.path}`}
          >
            {item.icon && (
              <ListItemIcon
                sx={{
                  color: "var(--text-primary)",
                  minWidth: "36px",
                  marginRight: -1,
                }}
              >
                <item.icon />
              </ListItemIcon>
            )}
            <ListItemText primary={t(item.key)} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
