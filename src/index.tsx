import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import NftProvider from "./NftProvider";

import App from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <NftProvider>
      <App />
    </NftProvider>
  </StrictMode>
);
