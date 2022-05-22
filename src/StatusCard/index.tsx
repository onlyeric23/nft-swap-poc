import { FC } from "react";
import { Config } from "../config.model";
import useUserNfts from "./useUserNfts";

const Status: FC<{ config: Config }> = ({ config }) => {
  const user1Nfts = useUserNfts(config.user1);
  const user2Nfts = useUserNfts(config.user2);

  return (
    <div className="card" style={{ flexDirection: "row", gap: 15 }}>
      <div className="flex-col flex-1">
        <h3>User 1 NFTs</h3>
        <div className="card flex-1">
          {user1Nfts.map((nft) => {
            return <div key={nft.id.tokenId}>{nft.title}</div>;
          })}
        </div>
      </div>

      <div className="flex-col flex-1">
        <h3>User 2 NFTS</h3>
        <div className="card flex-1">
          {user2Nfts.map((nft) => {
            return <div key={nft.id.tokenId}>{nft.title}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Status;
