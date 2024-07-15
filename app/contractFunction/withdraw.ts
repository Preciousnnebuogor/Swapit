import { BrowserProvider, Contract } from "ethers"

import { smartContractAbi, smartContractAddress } from "../contract/abi"

export default async function withdraw(
  address: string,
  amount: number
) {
  const provider = new BrowserProvider(window.ethereum)
  const signer = await provider.getSigner(address)

  const contract = new Contract(smartContractAddress, smartContractAbi, signer)

  try {
    const transaction = await contract.withdraw(amount)
    await transaction.wait()
  } catch (err) {
    console.log("sorry an error occured", err)
  }
}
