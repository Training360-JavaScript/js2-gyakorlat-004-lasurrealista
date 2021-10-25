const countOfWorkingDays = () => {
  let counter = 0;
  const from = new Date(new Date().getFullYear(), 0, 1);
  const to = new Date(new Date().getFullYear(), 7, 31);
  
  for (let day = from; day <= to; day.setDate(day.getDate() + 1)) {
    if (day.getDay() > 0 && day.getDay() < 6) {
      counter += 1;
    }
  }
  return counter;
};

export default countOfWorkingDays;
