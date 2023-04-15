import type { NextPage } from "next";
// 接続中のネットワークを取得するため useNetwork を新たにインポートします。
import { ConnectWallet, useNetwork, useAddress } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";

import Web3 from 'web3';



const Home: NextPage = () => {
  const address = useAddress();
  const [network, switchNetwork] = useNetwork();

  
  console.log("network:", network);
  console.log("network2: ", network?.data?.chain?.id)

  // console.log("window.eth:", window.ethereum)
  // Create a new Web3 instance with the provider of your choice
  const web3 = new Web3(window.ethereum);

  // Call getChainId() to retrieve the ID of the current network
  web3.eth.getChainId().then(chainId => {
    console.log(`Current chain ID is ${chainId}`);
  }).catch(error => {
    console.log(`Error retrieving chain ID: ${error}`);
  });

  if (address && network && network?.data?.chain?.id !== 5) {
    console.log("wallet address: ", address);
    console.log("network: ", network?.data?.chain?.id);

    return (
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Sepolia に切り替えてください⚠️</h1>
          <p>この dApp は Sepolia テストネットのみで動作します。</p>
          <p>ウォレットから接続中のネットワークを切り替えてください。</p>
        </main>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to DAO (Dog Admin Link) !!
          </h1>
          <div className={styles.connect}>
            <ConnectWallet />
          </div>
        </main>
      </div>
    );
  }
};

export default Home;