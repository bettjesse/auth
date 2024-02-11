import { getAllUsers, getUserByEmail, getUserById } from "@/data/user";
import { auth } from "@/auth"
import Avatar from "@/components/Avatar";
import { useMemo } from "react";
import {format} from "date-fns"
import {BiCalendar} from  "react-icons/bi"


const page = async() => {
    const session = await auth()
    const userName = session?.user?.name;
    const userId = session?.user?.id
    const email = session?.user?.email


    if (userId === null || userId === undefined) {
        // Handle the case when email is null or undefined
        return;
      }

    const loogedInUser = await getUserById(userId)
    console.log("LOGGED IN USER",loogedInUser)

    let formattedDate;

    if (!loogedInUser?.createdAt) {
      formattedDate = null;
    } else {
      formattedDate = format(new Date(loogedInUser.createdAt), "MMMM yyyy");
    }
    
    // Now 'formattedDate' holds the result, and you can use it as needed.
 
    


  return (
    <div className=" w-1/2 mx-auto ">
    <div className="shadow-md bg-white w-full mx-auto h-24 relative rounded-md">
      <div className=" w-full">
      <div className=" absolute -bottom-16 left-4">
        <Avatar isLarge hasBorder/>
        </div>
      

      </div>
     
        
       
       
    </div>
    <div className=" border-b  border-neutral-800 md:pb-20">
      <div className=" mt-16 px-4">
        <div className=" flex flex-col">
          <p className=" text-gray-400 text-sxl font-semibold">
            {loogedInUser?.name}

          </p>

        </div>
   <div className=" flex flex-col mt-4 ">
    <div className=" flex flex-row items-center gap-2 mt-4 text-gray-400">
      <BiCalendar size= {24}/>
      <p className="">
        Joined  {formattedDate}
      </p>

    </div>

   </div>
      </div>
      <div className=" flex flex-row mt-4  gap-6 px-4">
        <div className=" flex flex-row items-center gap-1">
        <p>  {loogedInUser?.followingIds?.length}</p>
        <p>Following</p>
        </div>
        <div className=" flex flex-row items-center gap-1">
        <p>  {loogedInUser?.followersCount  || 0}</p>
        <p>Followers</p>
        </div>
 
      </div>

</div>
   
    </div>
  )
}

export default page