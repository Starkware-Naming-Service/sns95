import { useStarknetCall, useStarknetInvoke } from "@starknet-react/core";
import { React, useState, useMemo } from "react";
import styled from "styled-components";
import {
  Window,
  WindowContent,
  WindowHeader,
  Button,
  Toolbar,
  TextField,
  Panel,
} from "react95";
import { useSNSContract } from "../hooks/sns";
import { toBN } from "starknet/dist/utils/number";

export function MainModule() {
  const [snsName, setSNSName] = useState("");
  const [searchSnsName, setSearchSNSName] = useState("");

  const { contract: sns } = useSNSContract();

  const { invoke } = useStarknetInvoke({
    contract: sns,
    method: "sns_register",
  });

  const { data: registeredSNS } = useStarknetCall({
    contract: sns,
    method: "sns_lookup_name_to_adr",
    args: [
      "0x0614A3dc3350Dd4702d14eEdB25D6fCDB014D506f7631899fb18d3bA2D3246D0", // Hardcoded address
    ],
  });

  const snsValue = useMemo(() => {
    if (registeredSNS && registeredSNS.length > 0) {
      const value = toBN(registeredSNS[0]);
      return value.toString(10);
    }
  }, [registeredSNS]);

  const registerSNS = () => {
    console.log("registerinbg SNS name: ", snsName);
    // invoke({
    //   args: ["0x1"], // Hardcoded arg
    //   metadata: {
    //     method: "sns_register",
    //     message: "register SNS",
    //   },
    // });
  };

  // const checkSNSExists = () => {
  //   invoke({
  //     args: [
  //       "0x614a3dc3350dd4702d14eedb25d6fcdb014d506f7631899fb18d3ba2d3246d0",
  //     ],
  //     metadata: {
  //       method: "sns_lookup_name_to_adr",
  //       message: "Looking up Lookup Name to Address",
  //     },
  //   });
  // };

  const registerContent = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextField
          value={snsName}
          placeholder={"starkware.stark"}
          // onChange={() => setSNSName()}
          onChange={(e) => setSNSName(e.target.value)}
          fullWidth
        />
        <Button onClick={() => registerSNS()} style={{ marginTop: 4 }}>
          Register
        </Button>
      </div>
    );
  };

  const searchContent = (
    <div
      style={{
        marginTop: 16,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextField
        value={searchSnsName}
        placeholder={"starkware.stark"}
        onChange={() => setSearchSNSName()}
        fullWidth
      />
      <Button onClick={() => checkSNSExists()} style={{ marginTop: 4 }}>
        Check if exists
      </Button>
      <p>SNS Value: {snsValue}</p>
    </div>
  );

  return (
    <Wrapper>
      <Window default resizable className="window">
        <WindowHeader className="window-header">
          <span>SNS.exe</span>
        </WindowHeader>
        <Toolbar>
          {/* <Button
            variant="menu"
            size="sm"
            style={{ backgroundColor: "#C6c6c6", border: "1px solid grey" }}
          >
            Register
          </Button>
          <Button
            variant="menu"
            size="sm"
            style={{ backgroundColor: "#C6c6c6", border: "1px solid grey" }}
          >
            Check
          </Button> */}
        </Toolbar>
        <WindowContent>
          <p style={{ textAlign: "center" }}>
            Starknet Name Services in a naming service for the starkers. <br />
            <br />
            Get a .stark domain
          </p>
          {registerContent()}
          <p style={{ textAlign: "center" }}>
            Check address to see if SNS is registered
          </p>
          {searchContent}
        </WindowContent>
      </Window>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* padding: 1rem; */
  /* background: ${({ theme }) => theme.desktopBackground}; */
  .window-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #060083;
    color: white;
  }
  .close-icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-left: -1px;
    margin-top: -1px;
    transform: rotateZ(45deg);
    position: relative;
    &:before,
    &:after {
      content: "";
      position: absolute;
      background: ${({ theme }) => theme.materialText};
    }
    &:before {
      height: 100%;
      width: 3px;
      left: 50%;
      transform: translateX(-50%);
    }
    &:after {
      height: 3px;
      width: 100%;
      left: 0px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
  .window {
    width: 400px;
    /* min-height: 200px; */
    background-color: #c6c6c6;
  }
  .window:nth-child(2) {
    margin: 2rem;
  }
  .footer {
    display: block;
    margin: 0.25rem;
    height: 31px;
    line-height: 31px;
    padding-left: 0.25rem;
  }
  .menu {
    background-color: #848584;
  }
`;
