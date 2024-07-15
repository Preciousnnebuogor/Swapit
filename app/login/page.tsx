"use client"

import { useState } from "react"
import { useAccount } from "wagmi"

import { useMinipay } from "../contract/miniPay"
import { transferCusdTokens } from "../contract/transferCusd"
import { ContractFn } from "../contractFunction"

export default function Login() {
  const { address } = useAccount()
  // const { walletAddress } = useMinipay()
  const [isBuy, setIsBuy] = useState(true)
  const [nairaValue, setNairaValue] = useState<string>("")
  const [celoValue, setCeloValue] = useState("")
  if (!address) {
    return <h2>Loading...</h2>
  }
  return (
    <div className={` px-4 `}>
      <div
        className={` border-2 rounded-lg bg-background w-full mt-[35%] px-8 pb-4`}
      >
        <div
          className={`mt-8 flex items-center justify-between text-foreground font-bold text-xl`}
        >
          <h1
            className={isBuy ? "text-foreground" : "text-slate-400"}
            onClick={() => {
              setIsBuy(true)
            }}
          >
            Buy
          </h1>
          <h1
            className={isBuy ? "text-slate-400" : "text-secondary"}
            onClick={() => {
              setIsBuy(false)
            }}
          >
            Sell
          </h1>
        </div>
        <div className={`mt-8 mb-2`}>
          <label className={` text-primary font-normal text-xl`}>Buy Now</label>
        </div>
        <div
          className={`flex items-center justify-between border rounder-md py-3 px-1`}
        >
         <input
            type="text"
            className={`bg-background border-none outline-none text-card px-2`}
            onChange={(e) => {
              setCeloValue(e.target.value)
              const exchange = parseInt(e.target.value) * 1500
              setNairaValue(exchange.toString())
              console.log(celoValue)
            }}
            value={celoValue}
          />
          <div className={`flex justify-between items-center space-x-2 pr-6 `}>
            <img src="/celo.png" className={"h-[20px] w-[20px] "} />
            <p>CUSD</p>
          </div>

        </div>

        <div className={`mt-4 mb-2`}>
          <label className={`text-primary font-normal text-xl`}>Pay Now</label>
        </div>
        <div
          className={`flex items-center justify-between border rounder-md py-3 px-1`}
        >
          

           <input
            type="number"
            className={` bg-background border-none outline-none text-card px-2`}
            onChange={(e) => {
              setNairaValue(e.target.value)
              const exchange = parseInt(e.target.value) / 1500
              setCeloValue(exchange.toString())
              console.log(nairaValue)
            }}
            value={nairaValue}
          />
          
          <div className={`flex justify-between items-center space-x-2 pr-6 `}>
            <img src="/nig.png" className={"h-[20px] w-[20px] "} />
            <p className={``}>NGN</p>
          </div>
        </div> here
        <div className={`flex items-center justify-center mt-10 mx-8`}>
          <button
            onClick={() => {
              console.log(address)
              transferCusdTokens({
                env: "CUSD_TESTNET",
                userAddress: address!,
                to: "0x462E5F272B8431562811126779da6EcaE51A5B40",
                // amount: 4,
                amount: parseInt(celoValue),
              })
              //ContractFn.deposit(address!, parseInt(celoValue))
            }}
            className={`text-white font-bold text-xl w-full py-4 rounded-lg 
            ${
              isBuy
                ? "bg-primary  text-white"
                : "bg-yellow-400 text-card-foreground"
            }`}
          >
            {isBuy ? "Buy" : "Sell"}
          </button>
        </div>
      </div>
      <div className={`flex items-center justify-center mt-6`}>
        <p>
          <span className={`text-primary font-extrabold`}>NGN</span>{" "}
          {nairaValue} ={" "}
          <span className={`text-primary font-extrabold`}>CELO</span>{" "}
          {celoValue}
        </p>
      </div>
      <div className={`mt-4 px-4`}>
        <h2>
          {` Dear valued customers, we're excited to announce a special promotion
          just for you! For every transaction above 20 CUSD made on our platform,
          there will be absolutely no charges. Enjoy seamless and cost-free
          transactions as our way of saying thank you for your loyalty and trust
          in our services. Let's keep growing and winning together!`}
        </h2>
      </div>
    </div>
  )
}
