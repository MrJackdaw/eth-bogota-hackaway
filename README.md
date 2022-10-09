# MicroDAO

## What is it? 

A microblogging + DAO platform. Topics or Communities are individual DAOs, each with their own treasury and some limited governance mechanisms. Membership fees are determined by each community; users can join as few or as many as they wish. 

`MicroDAO` was tested on Polygon Mumbai, but can likely be run on any EVM.

## Additional Notes
- All DAOs use the network token as currency. 
- Voting is free for DAO members, but restricted to one vote per member (address).
- Registration is halted while a proposal is active.


---
## How do I use it?

1. `npm install` 
2. `npm run start` (launches at `localhost:3000`) 
3. Open up MetaMask and make sure the **Polygon Mumbai** testnet is selected.
   1. Look [**here**](https://chainlist.org/) for a quick way to add it to MetaMask
4. Connect your wallet.

There is only one DAO right now, but you can create as many as you like. 

Take a look at [Available Scripts](#available-scripts) for additional CLI commands.

### Reach Helpers
This project includes some helpful bits, including 
* A self-contained [state instance](https://github.com/JACK-COM/raphsducks). You can subscribe to it like any other state.
* A `connect` button that will automatically trigger a wallet connection.\
    Default network is Algorand, but if your `stdlib` instance is using `ETH`, it will trigger MetaMask.
* A [light API](https://www.npmjs.com/package/@jackcom/reachduck#methods) for interacting with your `@reach/stdlib` instance.


---

## What does it contain? 

* [ReactJS](https://github.com/facebook/create-react-app) with [Typescript support](https://www.typescriptlang.org/): A popular front-end framework for building web applications 
* [Reach Language](https://docs.reach.sh/): A compiled language for building multi-chain smart contracts. This template includes **the JS dependency**, and [not the CLI](#installing-the-reach-cli).
* [Cryptocurrency Icons](https://github.com/spothq/cryptocurrency-icons) as well as a single-file API (and ReactJS component) for using them
* [Google's Material Icons](https://fonts.google.com/icons) for quick UI sugar
* SASS (no pre-defined style libraries: you can `npm install` any additional dependencies.)
* Typescript
* [🦆 raphsducks](https://github.com/JACK-COM/raphsducks): an unopinonated state manager.
* [🦆 reachduck](https://github.com/JACK-COM/reachduck): a simple API for interacting with the blockchain and/or a reach `stdlib` instance

### Reach Platform
**Reach** allows the creation of multi-chain smart contracts with a single language, which compiles down to JS and the native code for each chain. Learn more [here](https://docs.reach.sh/index.html).

---

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode at [http://localhost:3000](http://localhost:3000).


### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More about React

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/). Some other helpful topics:

* [Code Splitting](https://facebook.github.io/create-react-app/docs/code-splitting)
* [Analyzing the Bundle Size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)
* [Making a Progressive Web App](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)
* [Advanced Configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)
* [Deployment](https://facebook.github.io/create-react-app/docs/deployment)
* [`npm run build` fails to minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
