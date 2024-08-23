import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import { getCurrentLocaleFromPath } from "@/src/utils/fn";
import { locales } from "./utils/config";

export default getRequestConfig(async ({ locale }: { locale: string }) => {
  if (!locales.includes(locale)) {
    notFound();
  }

  return {
    messages: (await import(`./locales/${locale}.json`)).default,
  };
});
