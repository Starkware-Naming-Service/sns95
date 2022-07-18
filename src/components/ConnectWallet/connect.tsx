import { useStarknet, useConnectors } from "@starknet-react/core";
import { Button, Bar } from "react95";
export default function ConnectWallet() {
  const { account } = useStarknet();
  const { available, connect, disconnect } = useConnectors();

  if (account) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: 16,
        }}
      >
        <Button style={{ backgroundColor: "#C6c6c6", padding: 8, width: 200 }}>
          Account: {account.substring(0, 7) + "..."}
        </Button>
        <Button
          onClick={() => disconnect()}
          style={{ marginLeft: 8, backgroundColor: "#C6c6c6" }}
        >
          Disconnect
        </Button>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "row", marginBottom: 16 }}>
      {available.map((connector) => (
        <Button
          key={connector.id()}
          onClick={() => connect(connector)}
          style={{
            marginBottom: 16,
            marginRight: 8,
            backgroundColor: "#C6c6c6",
          }}
        >
          {`Connect ${connector.name()}`}
        </Button>
      ))}
    </div>
  );
}
