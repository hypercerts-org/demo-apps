import logo from "./logo.svg";
import hypercertsLogo from "./hypercerts_logo_green.png";
import "./App.css";
import { HypercertClient } from "@hypercerts-org/sdk";

function App() {
  const client = new HypercertClient({
    chainId: 5, // goerli testnet
  });

  console.log("client: ", client);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <code style={{ fontSize: "40px" }}> CRA + Hypercerts </code>
        </p>
        <div
          style={{
            display: "flex",
          }}
        >
          <img src={logo} className="App-logo" alt="logo" />

          <img src={hypercertsLogo} className="App-logo" alt="logo" />
        </div>

        <p>
          <div>
            <code>
              {client.readonly
                ? "Client is connected in readonly mode"
                : "Client not in readonly mode"}
            </code>
          </div>
        </p>
        <a
          className="App-link"
          href="https://hypercerts.org/docs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hypercerts docs
        </a>
      </header>
    </div>
  );
}

export default App;
