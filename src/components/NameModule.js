import { useStarknetTransactionManager } from "@starknet-react/core";
import React from "react";
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

const Wrapper = styled.div`
  padding: 1rem;
  background: ${({ theme }) => theme.desktopBackground};
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

export function NameModule() {
  const { transactions } = useStarknetTransactionManager();
  return (
    <Wrapper>
      <Window resizable className="window">
        <WindowHeader className="window-header">
          <span>SNS.exe</span>
        </WindowHeader>
        <Toolbar>
          <Button
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
          </Button>
        </Toolbar>
        <WindowContent style={{ height: 250 }}>
          <p style={{ textAlign: "center" }}>
            Starknet Name Services in a naming service for the starkers. <br />
            Get a .stark domain
          </p>
          <div style={{ display: "flex" }}>
            <TextField
              value={"starkware.stark"}
              placeholder="Type here..."
              onChange={() => console.log("test")}
              fullWidth
            />
            <Button
              onClick={() => console.log("test")}
              style={{ marginLeft: 4 }}
            >
              Reset
            </Button>
          </div>
        </WindowContent>
      </Window>
    </Wrapper>
  );
}
