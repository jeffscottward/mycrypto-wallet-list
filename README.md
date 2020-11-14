# NextJS Typescript Boilerplate

Bootstrap a developer-friendly NextJS app configured with:

- [Typescript](https://www.typescriptlang.org/)
- Linting with [ESLint](https://eslint.org/)
- Formatting with [Prettier](https://prettier.io/)
- Linting, typechecking and formatting on by default using [`husky`](https://github.com/typicode/husky) for commit hooks
- Testing with [Jest](https://jestjs.io/) and [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro)

## Deploy your own

Deploy the example using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/vercel/next.js/tree/canary/examples/with-typescript-eslint-jest)

## How to use

Execute [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init) or [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/) to bootstrap the example:

```bash
npx create-next-app --example with-typescript-eslint-jest with-typescript-eslint-jest-app
# or
yarn create next-app --example with-typescript-eslint-jest with-typescript-eslint-jest-app
```

Deploy it to the cloud with [Vercel](https://vercel.com/import?filter=next.js&utm_source=github&utm_medium=readme&utm_campaign=next-example) ([Documentation](https://nextjs.org/docs/deployment)).






## Exercise

The goal is to create a web page with react and typescript that allows a user to view the balances of an Ethereum address.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d670e584-2575-4f00-92d3-c81331197e31/Group_5.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d670e584-2575-4f00-92d3-c81331197e31/Group_5.png)

1. The project MUST.
    - Display the name, balance, and USD exchange value for each asset (Ether AND tokens).
    - Display the total USD exchange value for all assets.
    - Display the weight (%) of each token in the total.
2. The project SHOULD include tests. 
We encourage you to include unit tests for your logic and your UI components. You are free to choose which parts to test. You will be expected to defend why you choose not to test a part of the code.

**Bonus points for:**

- Allow the user the change currency - Not available on Ethplorer API
- Displaying a list of previous searches that the user can click to easily access previous results. - HTML5 Autocomplete ✔️
- Polling to update the balances. - ✔️ setInterval
- Using only node JSON_RPC calls 💪 - OD

## Good to know

- We do JS and strongly on it's eco-system. Feel free to use any dependency you choose.
- Though we love to discuss tooling this is not the topic of the exercise. We strongly recommend to use a starter kit such as [CRA](https://github.com/facebook/create-react-app) or [Next.js](https://nextjs.org/) which includes Typescript and a test runner out of the box.
- Though appreciate direct node calls but acknowledge the complexity involved. We recommend using [Ethplorer](https://github.com/EverexIO/Ethplorer/wiki/Ethplorer-API) to retrieve the required information. In a single call you can retrieve the list of token balances and the USD exchange rate.
- There is no time constraint.

## Evaluation

We will asses both the implemented solution UI/UX and the general quality of the code and use it as a basis for further discussion.

Intentionally there is no strict design to follow. The design is open to innovation. The provided wireframe is merely a suggestion.

When you are ready to show please provide us a link to the source code and the link of your published page - we recommend [Netlify](http://netlify.com/) - so we can test.

**Please reach out to us if you have any questions !**