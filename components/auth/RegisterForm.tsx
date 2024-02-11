"use client"
import CardWrapper from "@/components/auth/CardWrapper"
import { useForm } from "react-hook-form"
import {  RegisterSchema } from "@/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTransition , useState   } from "react"
import { } from "react"
import {
  Form, FormControl, FormLabel, FormField, FormItem, FormMessage
} from "@/components/ui/form"
import * as z from "zod"
import { register } from "@/actions/register"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import FormError from "@/components/FormError"
import FormSucess from "@/components/FormSuccess"
const RegisterForm = () => {
  const [ispending, startTransition] = useTransition()
  const [error, setError ]= useState<string  | undefined>("")
  const [success, setSuccess ]= useState<string  | undefined>("")
  const form = useForm<z.infer<typeof  RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      name:""
    }
  })

  const onSubmit = async (values: z.infer<typeof RegisterSchema>) => {
    setError("");
    setSuccess("");
  
    try {
       startTransition(async () => {
        const data = await register(values);
        setError(data.error);
        setSuccess(data.success);
      });
    } catch (error) {
      // Handle errors here
      console.error("An error occurred:", error);
    }
  };
  return (
    <CardWrapper
      headerLabel="Create an account"
      backButtonLabel="Already have an account ? "
      backButtonHref="/auth/login"
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
                  disabled= {ispending}
                  
                  />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
            />
                  <FormField
            control={form.control}
            name ="name"
            render= {({field})=> (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input
                  {...field}
                  placeholder="John Doe"
                  disabled= {ispending}
                  
                  
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
                  disabled= {ispending}
                  
                  />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name ="confirmPassword"
            render= {({field})=> (
              <FormItem>
                <FormLabel>Confirm Password</FormLabel>
                <FormControl>
                  <Input
                  {...field}
                  placeholder="******"
                  type="password"
                  disabled= {ispending}
                  
                  />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
            />

          </div>
          <FormError message= {error}/>
          <FormSucess message= {success}/>
<Button
className="w-full"
type="submit"
disabled= {ispending}
>
  {ispending ? "Loading": " Create an account"}
 
</Button>
        </form>

      </Form>
    </CardWrapper>
  )
}

export default RegisterForm