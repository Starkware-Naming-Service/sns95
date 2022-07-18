import { useStarknet, useConnectors } from "@starknet-react/core";

export default function ConnectWallet() {
  const { account } = useStarknet();
  const { available, connect, disconnect } = useConnectors();

  // console.log("availablae", available);

  if (account) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: 16,
        }}
      >
        <p style={{ color: "white" }}>
          Account: {account.substring(0, 7) + "..."}
        </p>
        <button
          onClick={() => disconnect()}
          style={{ maxWidth: 100, marginLeft: 8 }}
        >
          Disconnect
        </button>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "row", marginBottom: 16 }}>
      {available.map((connector) => (
        <button
          key={connector.id()}
          onClick={() => connect(connector)}
          style={{ marginBottom: 16 }}
        >
          {`Connect ${connector.name()}`}
        </button>
      ))}
    </div>
  );
}
