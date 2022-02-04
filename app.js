"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const bandchain_js_1 = require("@bandprotocol/bandchain.js");
// import { Client } from "@bandprotocol/bandchain.js"
// const testUrl = "https://laozi-testnet4.bandchain.org/grpc-web"
const mainUrl = "https://laozi1.bandchain.org/grpc-web";
const grpcUrl = mainUrl;
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const client = new bandchain_js_1.Client(grpcUrl);
        console.log("client", client);
        console.log("hello");
        // Step 2
        const minCount = 3;
        const askCount = 4;
        const pairs = ["BTC/USD", "ETH/USD"];
        try {
            // const func = async () => {
            //   console.log(JSON.stringify(await client.getReferenceData(pairs, minCount, askCount)))
            // })
            let data = yield client.getReferenceData(pairs, minCount, askCount);
            console.log("main -> data", data);
        }
        catch (error) {
            console.log("main -> error", error);
        }
        // console.log(JSON.stringify(await client.getReferenceData(pairs, minCount, askCount)))
        // return new Promise(()=>1)
    });
}
main();
