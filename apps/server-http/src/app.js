const http = require("http");
const sdk = require("@hypercerts-org/sdk");

const client = new sdk.HypercertClient({ chain: { id: 11155111 } });

const content = async () => {
  const { config } = client;

  const html = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <title>A JavaScript project</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>
    <h1>A JavaScript project</h1>
    <h2>${config.graphUrl}</h2>
  </body>
  </html>`;

  return html;
};

const app = new http.Server();

app.on("request", async (req, res) => {
  const html = await content();
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(html);
  res.end("\n");
});

export default app;
