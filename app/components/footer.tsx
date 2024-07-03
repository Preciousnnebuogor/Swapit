"use client"

import Link from "next/link"


export default function Footer() {
  
  return (
    <div className={`flex justify-between items-center text-center`}>
      <div
        className={
          "flex flex-row justify-between text-center mx-auto md:px-6 px-4 py-2 "
        }
      >
        <div className={" "}>
          <Link
            href={"/"}
            className={" hover:text-yellow-400 p-4 mt-20 md:mt-0 text-primary"}
          >
            Home
          </Link>
          <Link
            href={"/login"}
            className={" hover:text-second p-4 text-secondary-foreground"}
          >
            Buy/Sell
          </Link>

          <Link
            href={""}
            className={"  hover:text-yellow-400 p-3 px-5 text-primary"}
          >
            About
          </Link>
          <Link href={""} className={" hover:text-yellow-400 p-4 text-primary"}>
            Login
          </Link>
        </div>
      </div>
    </div>
  )
}
