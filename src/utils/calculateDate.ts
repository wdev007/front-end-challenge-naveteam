function monthDiff(dateFrom: Date, dateTo: Date): number {
  return (
    dateTo.getMonth() -
    dateFrom.getMonth() +
    (dateTo.getFullYear() - dateFrom.getFullYear())
  );
}

export const calculateDate = (initialDate: string): string => {
  const today = new Date();
  const date = new Date(initialDate || today);
  const differenceInYears = today.getFullYear() - date.getFullYear();
  const differenceInMonths = monthDiff(date, today);
  const differenceInDays = today.getDate() - date.getDate();

  return `${differenceInYears} anos, ${differenceInMonths} meses e ${differenceInDays} dias`;
};

export const calculateAge = (birthdate: string): number => {
  const today = new Date();
  const date = new Date(birthdate || today);

  return today.getFullYear() - date.getFullYear();
};
