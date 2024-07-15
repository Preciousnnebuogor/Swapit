"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ThemeToggle } from "@/comps"

import { ContractFn } from "../contractFunction"
import { ConnectButton } from "@rainbow-me/rainbowkit"

export default function Navbar() {
  const [hideConnectBtn, setHideConnectBtn] = useState(false)

  useEffect(() => {
    if (window.ethereum && window.ethereum.isMiniPay) {
      // User is using MiniPay so hide connect wallet button.
      setHideConnectBtn(true)

      //connect({ connector: injected({ target: "metaMask" }) })
    }
  }, [])

  return (
    <div className={" fixed top-0 w-screen bg-background text-foreground px-5"}>
      <div className={"flex justify-between items-center w-full"}>
        <div className={"px-4 py-2 "}>
          <div className="flex justify-start items-center">
            <img src={"./icon.png"} className={" h-14 w-14"} />
            <p className="text-xl text-card-foreground font-bold">SWAPIT</p>
          </div>
        </div>
        <div>
          {!hideConnectBtn && (
            <ConnectButton
            accountStatus={"avatar"}
              showBalance={{
                smallScreen: false,
                largeScreen: false,
              }}
            />
          )}
        </div>
        <ThemeToggle />
      </div>
    </div>
  )
}
