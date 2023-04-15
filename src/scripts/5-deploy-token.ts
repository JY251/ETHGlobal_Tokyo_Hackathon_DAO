import sdk from "./1-initialize-sdk.js";
import { AddressZero } from "@ethersproject/constants";


(async () => {
  try {
    // 標準的なERC-20のコントラクトをデプロイする
    const tokenAddress = await sdk.deployer.deployToken({
      // トークン名 Ex. "Ethereum"
      name: "DAO (Dog Admin Link) Governance Token",
      // トークンシンボル Ex. "ETH"
      symbol: "DoggieCoin",
      // これは、トークンを売却する場合の受け取り先の設定
      // 今回は販売しないので、再び AddressZero に設定
      primary_sale_recipient: AddressZero,
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenAddress
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();