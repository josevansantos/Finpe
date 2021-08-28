export const formatDate = (date) => {
  const newDate = new Date(date);
  // corrigindo UTC
  newDate.setHours(newDate.getHours() + newDate.getTimezoneOffset() / 60);

  const formatter = new Intl.DateTimeFormat('pt-BR');

  return formatter.format(newDate);
};

export const formatValue = (value) => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return formatter.format(value);
};
