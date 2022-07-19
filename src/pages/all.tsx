import Navbar from "~/components/Navbar";
import {
  Flex,
  Container,
  Heading,
  SimpleGrid,
  Text,
  Box,
} from "@chakra-ui/react";
import Avatar from "boring-avatars";
import useFetch from "use-http";
import { useEffect, useState } from "react";
import SnsNftCard from "~/components/SnsNftCard";

const usernames = [
  "caelin.stark",
  "stephen.stark",
  "remi.stark",
  "test.stark",
  "tony.stark",
  "nicolas.stark",
  "jeff.stark",
  "test.stark",
  "aya.stark",
  "uta.stark",
  "wei.stark",
  "holli.stark",
  "maya.stark",
];

const AllNfts = () => {
  const [data, setData] = useState();
  const { response, get } = useFetch("/api");

  useEffect(() => {
    initializeData();
  }, []); // componentDidMount

  async function initializeData() {
    const initialTodos = await get("/nfts");
    if (response.ok) setData(initialTodos);
  }
  return (
    <>
      <Navbar />
      <Container textAlign="center" maxW={800} pb={8}>
        <Heading color="white">Browse Registered Domains</Heading>
        <SimpleGrid columns={2} spacing={4} mt={4}>
          {(data as any)?.assets?.map(
            ({ token_id, owner: { account_address } }, i) => (
              <SnsNftCard
                username={usernames[i]}
                key={i}
                id={token_id}
                owner={account_address}
              />
            )
          )}
        </SimpleGrid>
      </Container>
    </>
  );
};

export default AllNfts;
