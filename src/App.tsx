import "./styles.scss";
import ConfigCard from "./ConfigCard";
import StatusCard from "./StatusCard";
import { useState } from "react";
import { Config } from "./config.model";
import { USER_1, USER_2, RAINKEBY_CHAIN_ID } from "./constant";

export default function App(): JSX.Element {
  const [config, setConfig] = useState<Config>({
    user1: USER_1,
    user2: USER_2,
    chainId: RAINKEBY_CHAIN_ID
  });

  return (
    <>
      <h2>Config</h2>
      <ConfigCard
        defaultConfig={config}
        onSubmit={(config) => {
          setConfig(config);
          console.log(config);
        }}
      />
      <h2>Status</h2>
      <StatusCard config={config} />
    </>
  );
}
