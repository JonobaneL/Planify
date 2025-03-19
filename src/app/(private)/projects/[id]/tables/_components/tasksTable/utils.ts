export const formatDate = (date: Date | undefined): string => {
  if (!date || isNaN(date.getTime())) return '';
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
  }).format(date);
};
