"use server"
import * as z from "zod"
import { db } from "@/lib/db"
import bcrypt  from "bcryptjs"
import { RegisterSchema } from "@/schemas"
import { getUserByEmail } from "@/data/user"
export const register= async(values: z.infer <typeof RegisterSchema>)=> {
    console.log(values)
    const validatedField = RegisterSchema.safeParse(values)

    if(!validatedField.success) {
        return { error: "invalid fields"}
}
const { email, password, name}= validatedField.data

const hashedPassword =  await bcrypt.hash(password,10)

    

    const existingUser= await getUserByEmail(email)

    if (existingUser) {
        return { error : "Email already in use"}
    }
    await db.user.create({
        data: {
            name,
            password: hashedPassword,
            email
        }
    })

    return {success : "User created"}
}
