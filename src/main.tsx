import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ConnectKitProvider, getDefaultClient } from "connectkit";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { protocol_graph_api } from "./service/urls";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import Notify from "bnc-notify";
import ProtocolsContextProvider from "./utils/context/ProtocolContext";
import { WagmiConfig, createClient, configureChains, chain } from "wagmi";
import { publicProvider } from "wagmi/providers/public";

// configure Chains

const { chains, provider, webSocketProvider } = configureChains(
  [chain.mainnet, chain.goerli, chain.sepolia, chain.polygon, chain.optimism],
  [publicProvider()]
);

// Notify dapp Connect
export const notify = Notify({
  dappId: "62dd48af-c147-4c69-9623-709db985aff8",
  networkId: 5,
});

// const alchemyId = process.env.REACT_APP_ALCHEMY_ID;
const alchemyId = "fq828rLOtdduom1yEDcC0zi1RVx_9NxE";
const client = createClient(
  getDefaultClient({
    appName: "test",
    alchemyId,
    autoConnect: true,
    provider,
    chains,
    infuraId: "4fcaca0b380a490c8a5760bfce713b99",
  })
);

const apolloClient = new ApolloClient({
  uri: protocol_graph_api,
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <WagmiConfig client={client}>
        <ConnectKitProvider>
          <ApolloProvider client={apolloClient}>
            <ProtocolsContextProvider>
              <App />
            </ProtocolsContextProvider>
          </ApolloProvider>
        </ConnectKitProvider>
      </WagmiConfig>
    </BrowserRouter>
  </React.StrictMode>
);
