# Railgun experimental

## contracts/
This directory contains an example of ERC20 contracts.

## app/
This directory contains a React app that interacts with a locally deployed smart contract of Railgun and an example ERC20.

## Get started
1. Start your local network
2. Deploy the example ERC20 contract to your local network.
3. Change the contract address in `app/.env`.

```bash
# .env template
# endpoint
REACT_APP_RPC_URL=""

# smart contract
REACT_APP_COIN_ADDRESS=""
REACT_APP_POSEIDONT3=""
REACT_APP_POSEIDONT4=""
REACT_APP_RAILGUN_LOGIC=""

# account
REACT_APP_COIN_DEPLOYER_PUBLIC_KEY=""
REACT_APP_COIN_DEPLOYER_PRIVATE_KEY=""

REACT_APP_A_PUBLIC_KEY=""
REACT_APP_A_PRIVATE_KEY=""

REACT_APP_B_PUBLIC_KEY=""
REACT_APP_B_PRIVATE_KEY=""

REACT_APP_TREASURY_PUBLIC_KEY=""
REACT_APP_TREASURY_PRIVATE_KEY=""

REACT_APP_ADMIN_PUBLIC_KEY=""
REACT_APP_ADMIN_PRIVATE_KEY=""
```
4. Start app using `npm run start`