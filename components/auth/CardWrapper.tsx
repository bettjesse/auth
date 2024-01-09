"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import BackButton from "./BackButton"
import Header from "@/components/auth/Header"
import Socials from "@/components/auth/Socials"

interface CardWrapper {
 children :React.ReactNode
 showSocial?: Boolean
 backButtonHref: string
 backButtonLabel : string
 headerLabel :string

}

const CardWrapper = ({ children,showSocial,backButtonHref,backButtonLabel, headerLabel}:CardWrapper) => {
  return (
    <Card className="w-[400px] shadow-md">
        <CardHeader>
            <Header label={headerLabel}/>
        </CardHeader>
        <CardContent>
        {children}
        </CardContent>
        { showSocial && (
          <CardFooter>
            <Socials/>
          </CardFooter>
        )}
        <CardFooter>
          <BackButton
          href = {backButtonHref}
          label = {backButtonLabel}
          
          />
        </CardFooter>
       
    </Card>
  )
}

export default CardWrapper