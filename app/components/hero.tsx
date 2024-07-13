import { useRouter } from "next/navigation"

import { ImageApp } from "@/lib/appImages"

export default function Hero() {
  const router = useRouter()
  return (
    <div>
      <div className={`mt-[20%] text-5xl px-10 `}>
        <h1 className={` text-foreground font-bold`}>
          Enjoy <span className={`text-second`}> Crypto beyond </span>{" "}
          Trading
        </h1>
      </div>
      <img src={ImageApp.hero} />
      <h2 className={`text-foreground px-4 mt-6`}>
        SWAPIT is a highly-secure crypto platform to buy, and sell CUSD, and
        other cryptocurrencies at the best rates.
      </h2>
      <div className={`flex items-center justify-between px-6 mt-6`}>
        <img src="/celo.png" className={"h-[50px] w-[50px] "} />
        <img src="/naira2.png" className={"h-[60px] w-[60px] "} />
        <img src="/cusd1.png" className={"h-[50px] w-[50px] "} />
        <img src="/celo.png" className={"h-[50px] w-[50px] "} />

      </div>
    </div>
  )
}
