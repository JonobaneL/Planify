import { CommentType } from '@/types/comment';

import { usersMock } from './users';

export const comments = [
  {
    id: '1',
    task_id: 'tk-1',
    parent_id: null,
    content: 'We need to finalize the wireframes before Friday.',
    created_by: usersMock[0],
    created_at: '2025-04-25',
  },
  {
    id: '2',
    task_id: 'tk-1',
    parent_id: null,
    content:
      'I think the current layout could use more white space, especially around the header.',
    created_by: usersMock[1],
    created_at: '2025-04-26',
  },
  {
    id: '3',
    task_id: 'tk-1',
    parent_id: null,
    content: 'Agreed. I’ll prepare a new draft with the suggested changes.',
    created_by: usersMock[2],
    created_at: '2025-04-27',
  },
  {
    id: '4',
    task_id: 'tk-2',
    parent_id: null,
    content:
      'API integration looks good, but we’re missing error handling for timeouts.',
    created_by: usersMock[0],
    created_at: '2025-04-25',
  },
  {
    id: '5',
    task_id: 'tk-2',
    parent_id: null,
    content: 'Good catch. I’ll add a fallback response and retry logic.',
    created_by: usersMock[1],
    created_at: '2025-04-26',
  },
  {
    id: '6',
    task_id: 'tk-3',
    parent_id: null,
    content:
      'Can someone review the new onboarding flow? It’s ready for testing.',
    created_by: usersMock[2],
    created_at: '2025-04-25',
  },
  {
    id: '7',
    task_id: 'tk-3',
    parent_id: null,
    content:
      'I went through it — looks smooth, but we might want to shorten the second step.',
    created_by: usersMock[0],
    created_at: '2025-04-26',
  },
  {
    id: '8',
    task_id: 'tk-3',
    parent_id: null,
    content:
      'Noted. I’ll tweak the copy and remove the extra confirmation screen.',
    created_by: usersMock[1],
    created_at: '2025-04-27',
  },
] as CommentType[];
