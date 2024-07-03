"use client"

import Link from "next/link"
import { ThemeToggle } from "@/comps"



export default function Navbar() {
  
  return (
    <div className={" fixed top-0 w-screen bg-background text-foreground px-5"}>
      <div className={"flex justify-between items-center w-full"}>
        <div className={"px-4 py-2 "}>
          <div className="flex justify-start items-center">
            <img src={"./icon.png"} className={" h-14 w-14"} />
            <p className="text-xl font-bold">SWAPIT</p>
          </div>
        </div>
        <ThemeToggle />
      </div>
    </div>
  )
}
