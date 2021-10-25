const getSecondsOfThisYearUntilNow = () => {
  const startDate = new Date(new Date().getFullYear(), 0, 1);
  const endDate = new Date(new Date().getFullYear(), 7, 31);
  return Math.round((endDate - startDate) / 1000);
};

export default getSecondsOfThisYearUntilNow;


