export const locales = ["en", "fr"] as const;

export const defaultLocale: Locale = "fr";

export type Locale = (typeof locales)[number];
