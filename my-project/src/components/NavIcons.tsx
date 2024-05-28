'use client'
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"

const NavIcons = () => {

const[isProfileOpen, setIsProfileOpen] = useState(false)

const[isCartOpen, setIsCartOpen] = useState(false)

    return (
        <div className="flex items-center gap-4 xl:gap-6">
         <Image src="/profile.png" alt="" height={22} width={22} className="cursor-pointer"/>

         {
            isProfileOpen && <div className="">
                <Link href="">Profile</Link>
            </div>
         }

         <Image src="/notification.png" alt="" height={22} width={22} className="cursor-pointer"/>

         <Image src="/cart.png" alt="" height={22} width={22} className="cursor-pointer"/>

        </div>
    )
}

export default NavIcons