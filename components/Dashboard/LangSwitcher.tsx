"use client";

import { useLocale } from "@/src/context/LocaleContext";
import { getCurrentLocaleFromPath } from "@/src/utils/fn";
import { Link } from "@mui/material";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const LangSwitcher = ({ color }: { color?: string }) => {
  const { locale, setLocale } = useLocale();
  const router = useRouter();
  const [currentLocale, setCurrentLocale] = useState<string | null>(null);

  useEffect(() => {
    const path = window.location.pathname;
    setCurrentLocale(getCurrentLocaleFromPath(path));
  }, []);

  const handleLanguageChange = (newLocale: string) => {
    if (!currentLocale) return;

    const path = window.location.pathname;
    const pathWithoutCurrentLocale = path.startsWith(`/${currentLocale}`)
      ? path.slice(`/${currentLocale}`.length)
      : path;

    const newPath = `/${newLocale}${pathWithoutCurrentLocale}`;

    setLocale(newLocale);
    Cookies.set("locale", newLocale, { expires: 365 });

    //router.replace(newPath);
    document.location = newPath;
  };

  if (currentLocale === null) return null;

  return (
    <>
      {currentLocale === "fr" ? (
        <Link
          sx={{
            color: color === "white" ? "white" : "var(--text-color)",
            px: 1,
            mr: 3,
            textDecoration: "none",
            cursor: "pointer",
          }}
          onClick={() => handleLanguageChange("en")}
        >
          EN
        </Link>
      ) : (
        <Link
          sx={{
            color: color === "white" ? "white" : "var(--text-color)",
            px: 1,
            mr: 3,
            textDecoration: "none",
            cursor: "pointer",
          }}
          onClick={() => handleLanguageChange("fr")}
        >
          FR
        </Link>
      )}
    </>
  );
};

export default LangSwitcher;
