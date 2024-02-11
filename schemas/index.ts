import * as z from "zod"

export const LoginSchema = z.object({
    email : z.string().email({
        message: "Email is required"
    }),
    password: z.string().min(1, {
        message: "Password is required"
    })
})
export const RegisterSchema = z.object({
    email : z.string().email({
        message: "Email is required"
    }),
    password: z.string().min(6, {
        message: "Minimun 6 characters"
    }),
    confirmPassword: z.string(),
    name: z.string().min(1, {
        message: "Name is required"
    })
}).refine(data => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});

export const PostSchema = z.object({
    body: z.string().min(1, {
        message: "Please enter some text to post"
    })
})