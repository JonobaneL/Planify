import { StatusParams } from './status';

export type TaskParams = {
  id: string;
  title: string;
  description: string;
  projectId: string;
  assigned_user: string;
  status: StatusParams;
  priority: StatusParams | null;
  estimation: number | null;
  slug: string;
  due_date: string | null;
  created_by: string;
  created_at: string;
  updated_at: string;
  updated_by: string;
  related_tasks: string[] | null;
  attachments: string[] | null;
  comments: string[] | null;
};
