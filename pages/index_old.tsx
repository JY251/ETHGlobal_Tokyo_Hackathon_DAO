import { ConnectWallet } from "@thirdweb-dev/react";
import type { NextPage } from "next";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          {/* 自分の作成する DAO 名に変更してください */}
          Welcome to MyDAO !!
        </h1>
        <p></p>
        <div className={styles.connect}>
          <ConnectWallet />
        </div>
      </main>
    </div>
  );
};

export default Home;