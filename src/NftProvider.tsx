import { getDefaultProvider } from "ethers";
import { FC } from "react";
import { NftProvider } from "use-nft";
import { RAINKEBY_CHAIN_ID } from "./constant";

const WrappedNftProvider: FC = (props) => {
  return (
    <NftProvider
      fetcher={["ethers", { provider: getDefaultProvider(RAINKEBY_CHAIN_ID) }]}
    >
      {props.children}
    </NftProvider>
  );
};

export default WrappedNftProvider;
