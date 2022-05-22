import { Nft } from "@alch/alchemy-web3";
import { useEffect, useState } from "react";
import { createAlchemyWeb3 } from "@alch/alchemy-web3";
import { ALCHEMY_API } from "../constant";

const web3 = createAlchemyWeb3(ALCHEMY_API);

async function getNfts(userAddress: string, pageKey?: string) {
  return web3.alchemy.getNfts({
    owner: userAddress,
    pageKey,
    withMetadata: true
  });
}

function useUserNft(userAddress: string): Nft[] {
  const [nfts, setNfts] = useState<Nft[]>([]);

  useEffect(() => {
    (async () => {
      let pageKey;
      setNfts([]);
      do {
        const res = await getNfts(userAddress);
        pageKey = res.pageKey;
        setNfts((nfts) => [...nfts, ...res.ownedNfts]);
      } while (pageKey);
    })();
  }, [userAddress]);

  return nfts;
}

export default useUserNft;
