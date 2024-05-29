'use client'
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const NavIcons = () => {

const[isProfileOpen, setIsProfileOpen] = useState(false)

const[isCartOpen, setIsCartOpen] = useState(false)

const router = useRouter()
const isLoggedIn = false;

const handleProfile = () => {
if (!isLoggedIn) {
    
}
}

    return (
        <div className="flex items-center gap-4 xl:gap-6">
         <Image src="/profile.png" alt="" height={22} width={22} className="cursor-pointer"
         onClick={handleProfile}/>

         {
            isProfileOpen && <div className="">
                <Link href="/">Profile</Link>
                <div className="mt-2 cursor-pointer">Logout</div>
            </div>
         }

         <Image src="/notification.png" alt="" height={22} width={22} className="cursor-pointer"/>

         <Image src="/cart.png" alt="" height={22} width={22} className="cursor-pointer"/>

        </div>
    )
}

export default NavIcons