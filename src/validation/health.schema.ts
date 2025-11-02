import { z } from 'zod';

export const healthCheckSchema = z.object({
  status: z.string().default('healthy'),
  timestamp: z.date().default(() => new Date()),
});

export type HealthCheck = z.infer<typeof healthCheckSchema>;