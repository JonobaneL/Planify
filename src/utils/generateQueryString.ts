type QueryValue = string | number | boolean | null | undefined;

export const generateQueryString = (params: Record<string, QueryValue>) => {
  const query = Object.entries(params)
    .filter(
      ([, value]) => value !== undefined && value !== null && value !== '',
    )
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value!)}`,
    )
    .join('&');

  return query ? query : '';
};
