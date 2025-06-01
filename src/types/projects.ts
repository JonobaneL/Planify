import { User } from './user';

export type Project = {
  id: string;
  name: string;
  slug: string | null;
  description: string | null;
  view: 'table' | 'board';
  createdAt: string;
  createdById: string;
  createdBy?: User;
};
