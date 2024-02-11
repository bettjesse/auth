
import { User } from "@prisma/client"
interface UserListProps {
    users: User[] | null;
}

const UserList = ({users} :UserListProps) => {
    if (!users) {
        // Handle the case when users is null, if needed
        return <div>No users available</div>;
      }
    
  return (
    
    <div> {users.map((user)=> (
<div key={user.id}>
    <div className=" flex flex-col py-4">
    <p className=" text-md  font-semibold">{user.name}</p>
    </div>
    

</div>

    ))}</div>
  )
}

export default UserList