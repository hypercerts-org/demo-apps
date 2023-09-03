import Image from "next/image";
import styles from "./page.module.css";
import { HypercertClient } from "@hypercerts-org/sdk";

export default function Home() {
  const client = new HypercertClient({
    chainId: 5, // goerli testnet
  });

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
          style={{ marginRight: "1rem" }}
        />
        <p>
          <code style={{ fontSize: "40px" }}> + </code>
        </p>
        <Image
          src="/hypercerts_logo_green.png"
          alt="Hypercerts Logo"
          width={180}
          height={180}
          style={{ marginLeft: "1rem" }}
        />
      </div>

      <div>
        <code>
          {client.readonly
            ? "Client is connected in readonly mode"
            : "Client not in readonly mode"}
        </code>
      </div>

      <div className={styles.grid}>
        <a
          href="https://hypercerts.org/docs/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Hypercerts</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
