export const substractDate = (inputDay, inputMonth, inputYear) => {
  const actualDate = new Date();
  const inputDate = new Date(`${inputMonth}-${inputDay}-${inputYear}`);

  const yearDiff = (actualDate - inputDate) / (86400000 * 365);
  const resultYear = Math.floor(yearDiff);
  const monthDiff = (yearDiff - resultYear) * 12;
  const resultMonth = Math.floor(monthDiff);
  const resultDay = Math.floor((monthDiff - resultMonth) * 30.4);

  return { years: resultYear, months: resultMonth, days: resultDay };
};
