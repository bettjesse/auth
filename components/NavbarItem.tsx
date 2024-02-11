"use client"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

interface NavbarItemProps {
    label : string
    href: string
}
const NavbarItem = ({label, href}: NavbarItemProps) => {
    const router = useRouter()
    const pathname= usePathname()
    const isActive = (pathname === "/" && href === "/"  ||
    pathname === href  ||
    pathname?.startsWith(`${href}/`)    )

    const onClick = ()=> {
      router.push(href)
    }
  return (
    <button
    onClick={onClick}
    type ="button"
    className= {cn(
        "flex items-center gap-x-2 text-gray-300 text-md font-[500] my-2 transition-all  ",
        isActive && "text-red-400  "
    )}    
    >
        
              {label}
     
    </button>
  )
}

export default NavbarItem