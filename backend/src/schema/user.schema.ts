import { z } from "zod";

export const UserSchema = z.object({
  id: z.string().uuid().optional(),
  email: z.string().email(),
  name: z.string().optional(),
  password: z.string().min(6),
});

export type User = z.infer<typeof UserSchema>;
