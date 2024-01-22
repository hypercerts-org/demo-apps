import {
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import { HypercertClient } from "@hypercerts-org/sdk";

const client = new HypercertClient({ chain: { id: 11155111 } });

export default function App() {
  const { config } = client;
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        {client && client.config ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              height: "100vh",
            }}
          >
            <img src="/hypercerts_logo_green.png" alt="logo" width="200" />
            <code
              style={{
                fontSize: "20px",
                color: client ? "lightgreen" : "inherit",
              }}
            >
              <table>
                <thead style={{ textAlign: "left" }}>
                  <tr>
                    <th>Key</th>
                    <th>Value</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(client.config).map(([key, value]) => (
                    <tr key={key}>
                      <td
                        style={{
                          paddingRight: "1rem",
                        }}
                      >
                        {key}
                      </td>
                      <td style={{ color: "black" }}>
                        {value?.toString() || "undefined"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </code>
          </div>
        ) : undefined}
      </body>
    </html>
  );
}
