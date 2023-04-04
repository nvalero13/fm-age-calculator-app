import { useState, useEffect } from "react";

export default function useError(inputDay, inputMonth, inputYear) {
  const [dayError, setDayError] = useState(null);
  const [monthError, setMonthError] = useState(null);
  const [yearError, setYearError] = useState(null);

  const actualYear = new Date().getFullYear();

  useEffect(() => {
    // Control day
    if (!inputDay) {
      setDayError("This field is required");
    } else if (inputDay < 0 || inputDay > 31) {
      setDayError("Must be a valid day");
    } else setDayError(null);

    // Control month
    if (!inputMonth) {
      setMonthError("This field is required");
    } else if (inputMonth < 0 || inputMonth > 12) {
      setMonthError("Must be a valid month");
    } else setMonthError(null);

    // Control year
    if (!inputYear) {
      setYearError("This field is required");
    } else if (inputYear > actualYear) {
      setYearError("Must be in the past");
    } else setYearError(null);
  }, [inputDay, inputMonth, inputYear]);

  return [dayError, monthError, yearError];
}
