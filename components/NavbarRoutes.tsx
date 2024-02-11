import React from 'react'
import NavbarItem from './NavbarItem'

const NavbarRoutes = () => {

    const navbarMenu =[
        {
            label:"Feed",
            href: "/feed"
        },
        {
            label:"Users",
            href: "/users"
        },
        {
            label:"Profile",
            href: "/profile"
        }
       
    ]
  return (
    <div className='flex gap-x-2'>
        {navbarMenu.map((menu)=> (
            <NavbarItem
            key = {menu.href}
            label= {menu.label}
            href = {menu.href}
            
            />
        ))}
    </div>
  )
}

export default NavbarRoutes