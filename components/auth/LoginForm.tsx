"use client"
import CardWrapper from "@/components/auth/CardWrapper"
import { useForm } from "react-hook-form"
import { LoginSchema } from "@/schemas"
import { useState, useTransition } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form, FormControl, FormLabel, FormField, FormItem, FormMessage
} from "@/components/ui/form"
import * as z from "zod"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import FormError from "@/components/FormError"
import { login } from "@/actions/login"
import FormSucess from "@/components/FormSuccess"
const LoginForm = () => {
const [ispending, startTransition] = useTransition()
const [error, setError ]= useState<string  | undefined>("")
const [success, setSuccess ]= useState<string  | undefined>("")
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  // const onSubmit = (values: z.infer <typeof LoginSchema>)=> {
  //   setError("")
  //   setSuccess("")
  //   startTransition(()=> {
  //     login(values)
  //     .then ((data)=> {
  //         setError(data.error)  
  //         setSuccess(data.success)
  //     })
  //   })

  // }

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");
  
    try {
       startTransition(async () => {
        const data = await login(values);
        setError(data?.error);
        setSuccess(data?.success);
      });
    } catch (error) {
      // Handle errors here
      console.error("An error occurred:", error);
    }
  };
  

  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account "
      backButtonHref="/auth/register"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6"

        >
          <div className=" space-y-4">
            <FormField
            control={form.control}
            name ="email"
            render= {({field})=> (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                  {...field}
                  placeholder="example@email.com"
                  type="email"
                  
                  />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name ="password"
            render= {({field})=> (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                  {...field}
                  placeholder="******"
                  type="password"
                  
                  />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
            />

          </div>
          <FormError message = {error}/>
          <FormSucess message = {success}/>
<Button
className="w-full"
type="submit">
  Login
</Button>
        </form>

      </Form>
    </CardWrapper>
  )
}

export default LoginForm