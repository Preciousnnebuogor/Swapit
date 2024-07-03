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
      <div className={`flex items-center justify-center mt-8`}>
        <button
          className={`bg-primary text-card rounded-full py-4 px-8`}
          onClick={() => router.push("/login")}
        >
          SWAP NOW
        </button>
      </div>
    </div>
  )
}
