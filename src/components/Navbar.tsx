import React from "react";
import { Flex, Spacer, Heading, Link, Box } from "@chakra-ui/react";
import ConnectWallet from "~/components/ConnectWallet/connect";
import NextLink from "next/link";

const Navbar: React.FC = () => (
  <Flex w="100%" p={4}>
    <Box flex={1}>
      <Heading>SNS</Heading>
    </Box>

    <NextLink href="/">
      <Link color="white" fontWeight="bold" mr={2}>
        Home
      </Link>
    </NextLink>
    <NextLink href="/all">
      <Link color="white" fontWeight="bold" ml={2}>
        Marketplace
      </Link>
    </NextLink>
    <Flex justifyContent="flex-end" flex={1}>
      <ConnectWallet />
    </Flex>
  </Flex>
);

export default Navbar;
