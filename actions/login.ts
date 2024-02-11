"use server"
import * as z from "zod"
import { LoginSchema } from "@/schemas"
import { AuthError } from "next-auth"
import { signIn } from "@/auth"
import { DEFAULT_LOGIN_REDIRECT } from "@/routes"
import { getUserByEmail } from "@/data/user"
export const login = async(values: z.infer <typeof LoginSchema>)=> {
    console.log(values)
    const validatedField = LoginSchema.safeParse(values)

    if(!validatedField.success) {
        return { error: "invalid fields"}
    
    }

        const {email, password}= validatedField.data
        const existingUser = await getUserByEmail(email);

        if (!existingUser || !existingUser.email || !existingUser.password) {
          return { error: "Email does not exist!" }
        }
      
        

        try {
            await signIn("credentials", {
                email,
                password,
                redirectTo: DEFAULT_LOGIN_REDIRECT
            })
            return { success: "Confirmation email sent!" };

        }catch (error)
         {
    if(error instanceof AuthError)  {
        switch (error.type) {
            case "CredentialsSignin":
            return { error : "Invalid Credentials!! "}
        
            default:
                return { error : "Something went wrong"}
            
        }
    }

    throw error
        }
}
