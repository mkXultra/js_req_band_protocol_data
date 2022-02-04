import  { Client }  from  "@bandprotocol/bandchain.js" 
// import { Client } from "@bandprotocol/bandchain.js"

// const testUrl = "https://laozi-testnet4.bandchain.org/grpc-web"
const mainUrl = "https://laozi1.bandchain.org/grpc-web"
const grpcUrl = mainUrl
async function main() {
  const client = new Client(grpcUrl)
  console.log("client", client)
  console.log("hello");
  // Step 2
  const minCount = 3
  const askCount = 4
  const pairs = ["BTC/USD", "ETH/USD"]
  try {
  // const func = async () => {
  //   console.log(JSON.stringify(await client.getReferenceData(pairs, minCount, askCount)))
  // })
    let data = await client.getReferenceData(pairs, minCount, askCount)
    console.log("main -> data", data)
  } catch (error) {
    console.log("main -> error", error)
    
  }
  // console.log(JSON.stringify(await client.getReferenceData(pairs, minCount, askCount)))
  // return new Promise(()=>1)
}

main()