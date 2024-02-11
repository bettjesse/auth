"use client"
import CardWrapper from "@/components/auth/CardWrapper"
import { useForm } from "react-hook-form"
import { PostSchema } from "@/schemas"
import { useState, useTransition } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import {
  Form, FormControl, FormLabel, FormField, FormItem, FormMessage
} from "@/components/ui/form"
import * as z from "zod"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"


const PostForm = () => {

  const form = useForm<z.infer<typeof PostSchema>>({
    resolver: zodResolver(PostSchema),
    defaultValues: {
   body: ""
    }
  })

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof PostSchema>) => {

  
    try {
      await axios.post("/api/post", values)
      console.log("post created");
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
            name ="body"
            render= {({field})=> (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Textarea
                  {...field}
                  placeholder="whats on your mind ?"
               
                  
                  />
                </FormControl>
                <FormMessage/>
              </FormItem>
            )}
            />
            <div className="flex items-center gap-x-2">
              <Button
                disabled={!isValid || isSubmitting}
                type="submit"
              >
                Tweetx
              </Button>

          </div>
          </div>
        </form>

      </Form>
    </CardWrapper>
  )
}

export default PostForm