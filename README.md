# bridge-reference
A reference implementation to bridging ERC-20 tokens across EVM chains via Connext

## Bridge UI reference implementation

Use [https://github.com/connext/xapp-starter/tree/main/src/sdk-interactions/node-examples](https://github.com/connext/xapp-starter/tree/main/src/sdk-interactions/node-examples) and [https://docs.connext.network/developers/sdk/sdk-quickstart](https://docs.connext.network/developers/sdk/sdk-quickstart) to implement a basic bridging UI that allows the user to bridge ERC-20 tokens from an origin chain to a destination chain.

The deliverable should be contained in a standalone git repo and allow for configuration to be passed, including production vs. testnet.

The UI implementation can follow [amarok-testnet.coinhippo.io](https://amarok-testnet.coinhippo.io/) ([https://github.com/CoinHippo-Labs/connext-bridge/tree/amarok](https://github.com/CoinHippo-Labs/connext-bridge/tree/amarok)).

UI design can be copied from the current design on [amarok-testnet.coinhippo.io](https://amarok-testnet.coinhippo.io/)

The UI should be a single page app that allows the user to:

- Connect wallet
- Source/destination chain selection
- Token selection
- Amount input
- Wallet connect/disconnect
- Show link to connextscan
- Inform the when the transaction has completed by polling the SDK or cartographer endpoint ([https://github.com/connext/nxtp/tree/main/packages/agents/cartographer](https://github.com/connext/nxtp/tree/main/packages/agents/cartographer)) (soon! only subgraphs until then)

UI code must be implemented using React/TS [latest React/Node/TS versions]

For wallet connection can use https://github.com/Web3Modal/web3modal
