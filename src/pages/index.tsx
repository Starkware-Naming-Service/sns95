import { useStarknetCall } from "@starknet-react/core";
import type { NextPage } from "next";
import { useMemo, useState } from "react";
import { toBN } from "starknet/dist/utils/number";
import { ConnectWallet } from "~/components/ConnectWallet";
import { IncrementCounter } from "~/components/IncrementCounter";
import { TransactionList } from "~/components/TransactionList";
// import { useCounterContract } from "~/hooks/counter";
import { useSNSContract } from "~/hooks/sns";
import styled from "styled-components";
import { NameModule } from "~/components/NameModule";

const Home: NextPage = () => {
  const [watch, setWatch] = useState(true);
  // const { contract: counter } = useCounterContract();
  const { contract: sns } = useSNSContract();
  // const { contract: sns } = useSNS();

  const { data: counterResult } = useStarknetCall({
    contract: sns,
    method: "counter",
    args: [],
    options: { watch },
  });

  const counterValue = useMemo(() => {
    if (counterResult && counterResult.length > 0) {
      const value = toBN(counterResult[0]);
      return value.toString(10);
    }
  }, [counterResult]);

  return (
    <div>
      <HeaderWallet>
        <h2 style={{ margin: 0 }}>Starkware Name Service</h2>
        <ConnectWallet />
      </HeaderWallet>

      <MainContent>
        <h2 className="text-3xl font-bold underline">Contract</h2>
        <p>Address: {sns?.address}</p>
        <p>Value: {counterValue}</p>
        <NameModule />
        {/* <p>
          <span>
            Refresh value at every block{" "}
            <input
              type="checkbox"
              checked={watch}
              onChange={(evt) => setWatch(evt.target.checked)}
            />
          </span>
        </p> */}
        <p>Register</p>
        <p>Check</p>
        {/* <IncrementCounter />
        <h2>Recent Transactions</h2>
        <TransactionList /> */}
      </MainContent>
    </div>
  );
};

export default Home;

// Styled Components
const HeaderWallet = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1em;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;
`;
