"use client"
import CardWrapper from "@/components/auth/CardWrapper"
import { useForm } from "react-hook-form"
import { LoginSchema } from "@/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form, FormControl, FormLabel, FormField, FormItem, FormMessage
} from "@/components/ui/form"
import * as z from "zod"
import { Input } from "@/components/ui/input"
const LoginForm = () => {

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: ""
    }
  })
  return (
    <CardWrapper
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account "
      backButtonHref="/auth/register"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(() => { })}
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

          </div>

        </form>

      </Form>
    </CardWrapper>
  )
}

export default LoginForm