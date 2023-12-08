import Image from "next/image";
import styles from "./page.module.css";
import ClientInfo from "./components/ClientInfo";
import { useHypercertClient } from "./hooks/useHypercertClient";

export default function Home() {
  const { client } = useHypercertClient();

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
        <code
          style={{
            fontSize: "20px",
            color: client ? "lightgreen" : "inherit",
          }}
        >
          {client
            ? "Client is connected in readonly mode"
            : "Client not in readonly mode"}
        </code>
      </div>

      <ClientInfo />
    </main>
  );
}
