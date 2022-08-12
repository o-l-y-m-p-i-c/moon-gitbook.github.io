# Ethereum Compatibility


## Differences Between Moon Rabbit EVM and Ethereum

Despite Ethereum compatibility, there are still differences between the two:


* Moon Rabbit EVM uses PoS. This means that existing Ethereum contracts that rely on Proof of Work internals (e.g., mining pool contracts) will almost certainly not work as expected on Moon Rabbit EVM.
* Moon Rabbit EVM includes an extensive set of on-chain governance features. These on-chain governance modules include functionality to power upgrades to the blockchain itself based on token weighted voting.


## Common Between Moon Rabbit EVM and Ethereum

As we can see, the differences are insignificant, which means that (aside from the exceptions noted above). Your applications, contracts, and tools will largely remain unchanged.

Moon Rabbit EVM supports:


* Solidity-Based Smart Contracts
* Ecosystem Tools (e.g., block explorers, front-end development libraries, wallets)
* Development Tools (e.g., Truffle, Remix, MetaMask)
* Ethereum Tokens via Bridges (e.g., token movement, state visibility, message passing)