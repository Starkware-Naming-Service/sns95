import { useStarknetTransactionManager } from "@starknet-react/core";
import React from "react";
import styled from "styled-components";
import {
  Window,
  WindowContent,
  WindowHeader,
  Button,
  Toolbar,
  Panel,
} from "react95";

const Wrapper = styled.div`
  padding: 5rem;
  background: ${({ theme }) => theme.desktopBackground};
  .window-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    min-height: 200px;
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
`;

export function NameModule() {
  const { transactions } = useStarknetTransactionManager();
  return (
    <div>
      <Window resizable className="window">
        <WindowHeader className="window-header">
          <span>SNS.exe</span>
        </WindowHeader>
        <Toolbar>
          <Button variant="menu" size="sm">
            Register
          </Button>
          <Button variant="menu" size="sm">
            Check
          </Button>
        </Toolbar>
        <WindowContent style={{ height: 250 }}>
          <p style={{ textAlign: "center" }}>
            Starknet Name Services in a naming service for the starkers. <br />
            Get a .stark domain
          </p>
        </WindowContent>
      </Window>

      {/* <Window className="window">
        <WindowHeader active={false} className="window-header">
          <span>not-active.exe</span>
          <Button>
            <span className="close-icon" />
          </Button>
        </WindowHeader>
        <WindowContent>I am not active</WindowContent>
      </Window> */}
    </div>
  );
}
