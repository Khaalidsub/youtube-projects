import { z } from 'zod';

export const configSchema = z.object({
  DATABASE_URL: z.string().url(),
  //converts the string to a number
  PORT: z.coerce.number().positive(),
});
