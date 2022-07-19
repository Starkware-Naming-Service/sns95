import { Box, Text } from "@chakra-ui/react";
import Avatar from "boring-avatars";
import { useSNSContract } from "~/hooks/sns";
import React, { useEffect } from "react";
import { useStarknetCall } from "@starknet-react/core";
import { toBN } from "starknet/utils/number";

type SnsNftCardProps = {
  id: number;
};

const SnsNftCard: React.FC<SnsNftCardProps> = ({ id }) => {
  const { contract } = useSNSContract();
  const res = useStarknetCall({
    contract,
    method: "sns_lookup_tokenId_to_name",
    calldata: [id],
    options: { watch: false },
  });

  console.log(res);

  return (
    <Box
      bg="white"
      borderRadius={8}
      alignItems="center"
      maxW={350}
      overflow="hidden"
    >
      <Box
        as={Avatar}
        borderRadius={8}
        size={350}
        name="caelin.eth"
        variant="marble"
        colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
        square
      />
      <Box p={4} textAlign="left">
        <Text fontSize="xs" color="gray.400">
          #128
        </Text>
        <Text fontSize="xl" fontWeight="bold">
          caelin.eth
        </Text>
        <Text fontSize="sm" color="gray.500">
          Owned by 0x
        </Text>
      </Box>
    </Box>
  );
};

export default SnsNftCard;
