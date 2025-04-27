import { create } from 'zustand';

import { comments } from '@/data/mock/comments';
import { CommentType } from '@/types/comment';

type StoreParams = {
  getTaskComments: (taskId: string) => CommentType[] | null;
  getCommentsCount: (taskId: string) => number;
};

export const useCommentsStore = create<StoreParams>(() => ({
  getTaskComments: (taskId) => {
    return comments.filter((comment) => comment.task_id === taskId) ?? null;
  },
  getCommentsCount: (taskId) => {
    return comments.filter((comment) => comment.task_id === taskId).length;
  },
}));
