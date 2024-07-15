import { BrowserProvider, Contract } from "ethers";



import { smartContractAbi, smartContractAddress } from "../contract/abi";


export default async function updateAuditor(
  address: string,
  
) {
  const provider = new BrowserProvider(window.ethereum)
  const signer = await provider.getSigner(address)

  const contract = new Contract(smartContractAddress, smartContractAbi, signer)

  try {
    const transaction = await contract.updateAuditor(address)
    await transaction.wait()
  } catch (err) {
    console.log("sorry an error occured", err)
  }
}