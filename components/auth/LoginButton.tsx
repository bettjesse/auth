
"use client"

import { useRouter } from "next/navigation"

 interface LoginButtonProps  {
children : React.ReactNode
mode? : "modal"  | "redirect"
asChild? : Boolean
}
const LoginbButton = ({ children, asChild, mode = "redirect"}:LoginButtonProps) => {
 const router= useRouter()
  const Onclick = ()=>{
router.push("/auth/login ")
    
  }
  return (
    <span onClick={Onclick} className=" cursor-pointer">{children}</span>
  )
}

export default LoginbButton