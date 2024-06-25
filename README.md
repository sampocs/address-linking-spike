### Test Accounts
* Mnemonic: `"ride text double erupt light banner battle bench mouse gap olympic tackle decade simple army boat vital idle coyote neck movie kidney drastic skirt"`
* Cosmos Private Key: `"0b39dbced06015b9f7d2ebb076071cb93fcfaaa093f6a6ff9450efce3b4be4fd"`
* Cosmos Public Key: `"A7U3vhjbQ1HtcJmS3Z70X9ViIqhH3OvpPTeuUcbM9Iwf"`
* Cosmos Address: `"cosmos1ulld64kguwfgt7h05qufp5qjcsfqp9puq5mtht"`

* Ethereum Private Key: `"0a6231f9f5cda82e2d71652fb5f7cfb60b19575e5dd3b91b03a3845e7399700a"`
* Ethereum Public Key: `str(eth_keys.PrivateKey(bytes.fromhex(ethereum_private_key)).public_key).replace("0x", "")`
* Ethereum Address: `"0xd9e45357b93225e94ab50bd859a767d542b8f881"`

### Testing with the frontend
* Follow setup guide [here](https://github.com/Stride-Labs/interface/wiki/010-app.stride:-Getting-Started)
* Checkout `srph/adr036-poc`
* Copy `.env.local` to `apps/app.stride`
* Run `pnpm dev` and open `localhost:3000/testpresso`
* Relevant file is `Testpresso.tsx`
* Use the following private key in keplr for testing: `0b39dbced06015b9f7d2ebb076071cb93fcfaaa093f6a6ff9450efce3b4be4fd`