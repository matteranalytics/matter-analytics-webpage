import { localeDateString } from "./custom/local-date.js";

/**
 * @param {string} dateStr - Date string in formats: "YYYY", "YYYY-MM", or "YYYY-MM-DD"
 * @returns {string} Formatted date string using locale settings
 */
export function formatDate(dateStr) {
    const yearRegex = /^\d{4}$/;
    const yearMonthRegex = /^\d{4}-\d{2}$/;
    const fullDateRegex = /^\d{4}-\d{2}-\d{2}$/;
    let date;
    /** @type {Intl.DateTimeFormatOptions} */
    let customOptions = { ...localeDateString.options };

    if (yearRegex.test(dateStr)) {
        date = new Date(parseInt(dateStr), 0, 1);
        customOptions = { year: "numeric" };
    } else if (yearMonthRegex.test(dateStr)) {
        const [year, month] = dateStr.split("-");
        date = new Date(parseInt(year), parseInt(month) - 1, 1);
        delete customOptions.day;
    } else if (fullDateRegex.test(dateStr)) {
        date = new Date(dateStr);
    } else {
        return dateStr;
    }

    return date.toLocaleDateString(localeDateString.locales, customOptions);
}
