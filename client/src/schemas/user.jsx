import * as z from "zod";

export const LoginSchema = z.object({
  usernameOrEmail: z
    .string({
      message: "Username or email not valid",
    })
    .min(1, {
      message: "Username or email cannot be empty",
    }),
  password: z.string().min(1, {
    message: "Password is Required",
  }),
});

export const RegisterSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  username: z.string().min(1, {
    message: "Username is Required",
  }),
  password: z.string().min(7, {
    message: "Minimum 6 characters required",
  }),
});
