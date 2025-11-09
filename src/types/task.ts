import { StatusParams } from './status';

export type TaskParams = {
  id: string;
  title: string;
  description?: string;
  projectId: string;
  assigned_user?: string;
  status: StatusParams | string;
  statusId: string | string;
  priority?: StatusParams | null;
  priorityId?: string | null;
  estimation?: number | null;
  slug: string;
  type?: StatusParams | null;
  typeId: string;
  dueDate?: string | null;
  created_by?: string;
  created_at?: string;
  updated_at?: string;
  updated_by?: string;
  related_tasks: string[] | null;
  attachments: string[] | null;
  comments?: string[] | null;
};
