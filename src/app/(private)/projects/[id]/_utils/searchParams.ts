import { createSearchParamsCache, parseAsString } from 'nuqs/server';

export const searchParamsCache = createSearchParamsCache({
  groupBy: parseAsString.withDefault('type'),
  groupOrder: parseAsString,
});
