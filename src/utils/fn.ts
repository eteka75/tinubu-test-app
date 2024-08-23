/**
 * Convert  date from format YYYY-MM-DD to DD/MM/YYYY.
 * @param {string} dateString - Date to YYYY-MM-DD format.
 * @returns {string} return date to DD/MM/YYYY format .
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  // Format DD/MM/YYYY
  return `${day}/${month}/${year}`;
}

export const getCurrentLocaleFromPath = (path: string): string => {
  const match = path.match(/^\/(en|fr)/);
  return match ? match[1] : "en"; // Locale par défaut si aucune trouvée
};
