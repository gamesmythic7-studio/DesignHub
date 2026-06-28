import { z } from "zod";

export const taskCreateSchema = z.object({
  title: z.string().min(1).max(200),
  description: z.string().max(2000).optional(),
  completed: z.boolean().optional(),
  priority: z.number().int().min(0).max(5).optional(),
  dueDate: z.string().datetime().optional(),
});

export const taskUpdateSchema = taskCreateSchema.partial();

export const taskResponseSchema = z.object({
  id: z.string().uuid(),
  userId: z.string().uuid(),
  title: z.string(),
  description: z.string().nullable(),
  completed: z.boolean(),
  priority: z.number().int(),
  dueDate: z.string().datetime().nullable(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export const errorResponseSchema = z.object({
  error: z.object({
    message: z.string(),
    code: z.string().optional(),
  }),
});

export type TaskCreate = z.infer<typeof taskCreateSchema>;
export type TaskUpdate = z.infer<typeof taskUpdateSchema>;
export type TaskResponse = z.infer<typeof taskResponseSchema>;
export type ErrorResponse = z.infer<typeof errorResponseSchema>;
