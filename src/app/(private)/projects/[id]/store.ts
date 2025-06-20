import { create } from 'zustand';

import { COLUMNS } from '@/data/mockColumns';

type StoreParams = {
  columnVisibility: Record<(typeof COLUMNS)[number]['key'], boolean>;
  setColumnVisibility: (
    key: (typeof COLUMNS)[number]['key'],
    value: boolean,
  ) => void;
  toggleAllColumns: (value?: boolean) => void;
};
const initialColumns = COLUMNS.reduce(
  (acc, column) => ({ ...acc, [column.key]: true }),
  {},
);

export const useTableStore = create<StoreParams>((set) => ({
  columnVisibility: initialColumns,
  setColumnVisibility: (key, value) =>
    set((state) => ({
      columnVisibility: { ...state.columnVisibility, [key]: value },
    })),
  toggleAllColumns: (value) =>
    set({
      columnVisibility: COLUMNS.reduce(
        (acc, column) => ({
          ...acc,
          [column.key]: value,
        }),
        {},
      ),
    }),
}));
