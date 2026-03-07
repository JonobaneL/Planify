import { createSearchParamsCache, parseAsString } from 'nuqs/server';

// TODO: change to better name
export const projectsSearchParamsCache = createSearchParamsCache({
  sort: parseAsString.withDefault('updatedAt'),
  order: parseAsString.withDefault('desc'),
  view: parseAsString,
});

export const parseViewParam = (view: string | null) => {
  if (view === 'favorite') return { favorite: true };
  if (view === 'archived') return { archived: true };
  return { archived: false };
};
