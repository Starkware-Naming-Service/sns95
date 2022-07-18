import React from "react";
import { Flex, Spacer, Heading } from "@chakra-ui/react";
import ConnectWallet from "~/components/ConnectWallet/connect";

const Navbar: React.FC = () => (
  <Flex w="100%" p={4}>
    <Heading>SNS</Heading>
    <Spacer />
    <ConnectWallet />
  </Flex>
);

export default Navbar;
