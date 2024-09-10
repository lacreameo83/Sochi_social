import { z } from "zod";

export const signInSchema = z
  .object({
    fullName: z.string(),
    //   .min(1, { message: "Must be 5 or more characters long" }),
    email: z.string().email({ message: "invalid email address" }),
    password: z.string().min(8, { message: "must be up to 8" }),
    comfirmpassword: z.string(),
  })
  .refine((data) => data.password === data.comfirmpassword, {
    message: "Passwords did not match",
    path: ["comfirmPassword"],
  });
