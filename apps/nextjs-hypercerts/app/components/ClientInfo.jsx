import { useHypercertClient } from "../hooks/useHypercertClient";

const ClientInfo = () => {
  const { client } = useHypercertClient();

  return (
    <>
      {client && client.config ? (
        <div>
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
                    <td style={{ color: "white" }}>
                      {value?.toString() || "undefined"}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </code>
        </div>
      ) : undefined}
    </>
  );
};

export default ClientInfo;
