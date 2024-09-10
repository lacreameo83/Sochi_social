import { z } from "zod";



export const LogInSchema = z.object({
  email: z.string().email({ message: "email is required" }),
  password: z.string().min(8, { message: "password not correct" }),
});
