import { getAllUsers } from "@/data/user"
import UserList from "@/components/UserList"

const page = async() => {

    const users = await getAllUsers()
  return (
    <div className=" flex items-center p-4 ">
        <div className=" bg-white shadow-md w-1/2 rounded-md mx-auto">
            <div className=" p-3">
            <UserList  users = {users}/>
            </div>
            

        </div>
    
         </div>
  )
}

export default page