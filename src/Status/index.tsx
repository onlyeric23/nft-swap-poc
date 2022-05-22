import { FC } from "react";
import { Config } from "../config.model";

const Status: FC<{ config: Config }> = () => {
  return (
    <div className="card" style={{ flexDirection: "row", gap: "10px" }}>
      <div className="card" style={{ flex: 1 }}></div>
      <div className="card" style={{ flex: 1 }}></div>
    </div>
  );
};

export default Status;
