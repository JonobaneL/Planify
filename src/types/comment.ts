import { User } from './user';

export type CommentType = {
  id: string;
  task_id: string;
  parent_id: string | null;
  content: string;
  created_at: string;
  created_by: User | string;
  updated_at?: string;
};
