import { Box, Button, Flex, HStack, Spacer, Text } from "@chakra-ui/react";
import Avatar from "boring-avatars";
import { useSNSContract } from "~/hooks/sns";
import React, { useEffect } from "react";
import { useStarknetCall } from "@starknet-react/core";
import { toBN } from "starknet/utils/number";

type SnsNftCardProps = {
  username: string;
  id: number;
  owner: string;
};

const SnsNftCard: React.FC<SnsNftCardProps> = ({ username, id, owner }) => {
  return (
    <Box
      bg="white"
      borderRadius={8}
      alignItems="center"
      maxW={350}
      overflow="hidden"
    >
      <Box position="relative">
        <Text
          position="absolute"
          fontWeight="semibold"
          color="white"
          fontSize="xl"
          top={4}
          left={4}
        >
          {username}
        </Text>
      </Box>
      <Box
        as={Avatar}
        borderRadius={8}
        size={350}
        name={username}
        variant="marble"
        colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
        square
      />
      <Flex alignItems="center" p={4}>
        <Box textAlign="left">
          <Text fontSize="xs" color="gray.400">
            #{id}
          </Text>
          <Text fontSize="xl" fontWeight="bold">
            {username}
          </Text>
          <Text fontSize="xs" color="gray.500">
            Owned by {owner.substring(0, 5)}...
          </Text>
        </Box>
        <Spacer />
        {Math.random() > 0.5 ? (
          <HStack>
            <Text fontSize="sm" fontWeight="bold" color="gray.700">
              0.08 ETH
            </Text>
            <Button size="sm" colorScheme="orange">
              Buy on Aspect
            </Button>
          </HStack>
        ) : (
          <Button size="sm" colorScheme="yellow">
            Bid on Aspect
          </Button>
        )}
      </Flex>
    </Box>
  );
};

export default SnsNftCard;
