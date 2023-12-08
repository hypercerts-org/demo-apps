import { HypercertClient } from "@hypercerts-org/sdk";

const useHypercertClient = () => {
  const client = new HypercertClient({ chain: { id: 5 } });

  return { client };
};

export { useHypercertClient };
