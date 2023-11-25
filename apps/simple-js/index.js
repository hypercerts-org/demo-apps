const { HypercertClient } = require("@hypercerts-org/sdk");

const client = new HypercertClient({
  chain: { id: 10 }, // optimism
});

console.log(client.config.chain.id);
console.log(client.config.graphUrl);
