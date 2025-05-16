import { User } from './user';

export type Project = {
  id: string;
  name: string;
  slug: string;
  description: string;
  view: 'table' | 'board';
  createdAt: string;
  createdById: string;
  createdBy?: User;
};
