import { useStarknetCall } from "@starknet-react/core";
import type { NextPage } from "next";
import { useMemo, useState } from "react";
import { toBN } from "starknet/dist/utils/number";
import { ConnectWallet } from "~/components/ConnectWallet";
import Image from "next/image";
import { IncrementCounter } from "~/components/IncrementCounter";
import { TransactionList } from "~/components/TransactionList";

import { useSNSContract } from "~/hooks/sns";
import styled from "styled-components";
import { MainModule } from "~/components/MainModule";

const Home: NextPage = () => {
  const [watch, setWatch] = useState(true);

  return (
    <MainContent>
      <Image src="/snsLogo.png" alt="sns" height={200} width={200} />
      <ConnectWallet />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <MainModule />
      </div>
    </MainContent>
  );
};

export default Home;

// Styled Components
const HeaderWallet = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 1em;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;
`;
