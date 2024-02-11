import NavbarRoutes from "./NavbarRoutes"
import Logo from "./Logo"
const Navbar = () => {
  return (
   
    <div className=" h-full p-4 border-b flex items-center bg-white shadow-sm w-full">
        <div className=" flex w-full items-center justify-between">
          <Logo/>
         
          <NavbarRoutes/>
         
      
        </div>



    </div>
  )
}

export default Navbar