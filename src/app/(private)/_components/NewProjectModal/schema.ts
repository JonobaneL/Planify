import { z } from 'zod';

export const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  description: z.string().nullable(),
  view: z.enum(['table', 'board']),
});

export type ProjectForm = z.infer<typeof formSchema>;
