"use client"
export default function About() {
  return (
    <div className={`text-foreground`}>
      <div className={`mt-[20%] text-2xl px-4 text-foreground`}>
        <h1 className={`px-6`}>
          The Money App For Nigeria {""}
          <span>
            <img src="/nig.png" className={"h-[30px] w-[30px] inline-block"} />
          </span>
        </h1>
      </div>
      <div className={`mt-10 px-4`}>
        <h2>
          Dear valued customers, we're excited to announce a special promotion
          just for you! For every transaction above 20 CUSD made on our platform,
          there will be absolutely no charges. Enjoy seamless and cost-free
          transactions as our way of saying thank you for your loyalty and trust
          in our services. Let's keep growing and winning together!"
        </h2>
      </div>
    </div>
  )
}
