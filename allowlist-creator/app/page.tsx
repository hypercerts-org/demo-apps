"use client";
import { HypercertClient, HypercertsStorage } from "@hypercerts-org/sdk";
import Image from "next/image";
import { useForm, useFieldArray, Control, useWatch } from "react-hook-form";
import { StandardMerkleTree } from "@openzeppelin/merkle-tree";

type FormValues = {
  allowlist: {
    address: `0x${string}`;
    units: number;
  }[];
};

export default function Home() {
  const client = new HypercertClient({
    chain: { id: 5 },
  });

  const storage = new HypercertsStorage({
    web3StorageToken: process.env.NEXT_PUBLIC_WEB3_STORAGE_TOKEN,
    nftStorageToken: process.env.NEXT_PUBLIC_NFT_STORAGE_TOKEN,
  });

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      allowlist: [{ address: "0x000....000", units: 0 }],
    },
    mode: "onBlur",
  });
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: "allowlist", // unique name for your Field Array
    }
  );

  const onSubmit = async (data: FormValues) => {
    console.log(data);
    const { allowlist } = data;
    const parsedAllowlist = allowlist.map((item) => {
      return [item.address, item.units];
    });
    const tree = StandardMerkleTree.of(parsedAllowlist, ["address", "uint256"]);
    const root = tree.root;
    console.log(root);

    const tx = await client?.storage.storeData(root);
  };

  const ConnectionBanner = () => {
    const connected = (
      <div className="alert alert-success">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Client is connected</span>
      </div>
    );

    const readonly = (
      <div className="alert alert-warning">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <span>Client is in readonly mode</span>
      </div>
    );

    return client.readonly ? readonly : connected;
  };

  const Total = ({ control }: { control: Control<FormValues> }) => {
    const formValues = useWatch({
      name: "allowlist",
      control,
    });
    const total = formValues.reduce(
      (acc, current) => acc + (current.units || 0),
      0
    );
    return <p>Total Amount: {total.toString()}</p>;
  };

  const Form = () => {
    return (
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="header-row">
            <div className="header">Address</div>
            <div className="header">Units</div>
            <div className="header">Action</div>
          </div>
          {fields.map((field, index) => {
            return (
              <div key={field.id} className="front">
                <section className={"section"} key={field.id}>
                  <input
                    placeholder="address"
                    {...register(`allowlist.${index}.address` as const, {
                      required: true,
                    })}
                    className={
                      errors?.allowlist?.[index]?.address ? "error" : "input"
                    }
                  />
                  <input
                    placeholder="units"
                    type="number"
                    {...register(`allowlist.${index}.units` as const, {
                      valueAsNumber: true,
                      required: true,
                    })}
                    className={
                      errors?.allowlist?.[index]?.units ? "error" : "input"
                    }
                  />
                  <button
                    className="btn-md btn-error"
                    type="button"
                    onClick={() => remove(index)}
                  >
                    DELETE
                  </button>
                </section>
              </div>
            );
          })}

          <Total control={control} />

          <button
            className="btn-md	btn-accent m-2"
            type="button"
            onClick={() =>
              append({
                address: "0x000....000",
                units: 0,
              })
            }
          >
            APPEND
          </button>
          <input type="submit" className="btn-md	btn-accent m-2" />
        </form>
      </div>
    );
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ConnectionBanner />

      <Form />
    </main>
  );
}
