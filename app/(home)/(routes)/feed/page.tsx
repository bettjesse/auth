
"use client"
import { getAllUsers, getUserByEmail, getUserById } from "@/data/user";
import { auth } from "@/auth"

import { useSession, signOut } from "next-auth/react";
const Feedpage = () => {

   const logOut = ()=> {
    signOut()
   }
   const session= useSession()
  return (
    <div> Feed page

        {JSON.stringify(session)}

        <button onClick={ logOut}  type="submit">
          logout

        </button>
    </div>
  )
}

export default Feedpage