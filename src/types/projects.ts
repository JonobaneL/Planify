import { User } from './user';

export type Project = {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  favorite?: boolean;
  archived?: boolean;
  createdAt: string;
  updatedAt: string;
  createdById: string;
  createdBy?: User;
};
