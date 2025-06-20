export const generateQueryString = (
  params: Record<string, string | undefined | null>,
) => {
  const query = Object.entries(params)
    .filter(
      ([, value]) => value !== undefined && value !== null && value !== '',
    )
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value!)}`,
    )
    .join('&');

  return query ? `?${query}` : '';
};
