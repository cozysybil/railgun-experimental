1. Go to `@railgun-privacy/contract` then up the node and deploy contract
```bash
npx hardhat node
npx hardhat deploy:test --network localhost
```
2. In this `backend` folder pre-mint for swap liquidity
```bash
node src/temp.js
```
3. In this `backend` folder up the app service
```bash
node src/app.js
```
4. Go to `app` folder then up the react
```bash
npm run start
```