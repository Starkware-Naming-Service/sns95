import { NextApiHandler } from "next";

const GetNfts: NextApiHandler = async (req, res) => {
  const rawData = await fetch(
    "https://api-testnet.aspect.co/api/v0/assets?contract_address=0x061e96aeb95bb0b574c4dfdb6f0874f26b7470f285a06306f8f898b5bcfb5922",
    {
      headers: {
        accept: "application/json",
      },
    }
  );

  const data = await rawData.json();

  res.status(200).json(data);
};

export default GetNfts;
