
import { signOut } from "@/auth"

const page = async() => {
  return (
    <div>

        {/* <form action={async()=> {
            "use server"
            await signOut()
        }}>
            <button type = "submit">
                Logout
            </button>

        </form> */}

        <h1 className=" text-3xl text-red-200">
            home page
        </h1>
    </div>
  )
}

export default page