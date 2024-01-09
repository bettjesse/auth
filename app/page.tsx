
import { Poppins } from "next/font/google"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import LoginbButton from "@/components/auth/LoginButton"


 export const font = Poppins({
  subsets: ["latin"],
  weight:["600"]
})
export default function Home() {


  return (
  <main className = " h-full flex flex-col justify-center items-center bg-red-400"> 
  <div className=" space-y-6">
    <h1 className={ cn("text-6xl font-semibold text-white drop-shadow-md",
    font.className
  )}>
      Auth

    </h1>
<div>
  <LoginbButton>
  <Button variant={"secondary"} size={"lg"}>
    Login

  </Button>
  </LoginbButton>
 
</div>
  </div>
  
  </main>
  )
}
