import { z } from 'zod';
import { configSchema } from './config.interface';

export type Config = z.infer<typeof configSchema>;

export const config = (config: Record<string, unknown>) => {
  const result = configSchema.parse(config);
  return result;
};
