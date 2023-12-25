import { HypercertClient } from "@hypercerts-org/sdk";

const useHypercertClient = () => {
  const client = new HypercertClient({ chain: { id: 11155111 } });

  return { client };
};

export { useHypercertClient };
