# eslint-config-episerver

> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for the Episerver JavaScript style guide

## Installation

### yarn

```
yarn add --dev eslint-config-episerver
```

### npm

```
npm install --save-dev eslint-config-episerver
```

## Usage

Once the `eslint-config-episerver` package is installed, you can use it by specifying `episerver` in the [`extends`](http://eslint.org/docs/user-guide/configuring#extending-configuration-files) section of your [ESLint configuration](http://eslint.org/docs/user-guide/configuring).

```js
{
  "extends": "episerver",
  "rules": {
    // Additional, per-project rules...
  }
}
```

### Using the `episerver` config with `eslint:recommended`

There are several rules in the [`eslint:recommended` ruleset](http://eslint.org/docs/rules/) that the Episerver style is not opinionated about that you might want to enforce in your project.

To use the Episerver style in conjunction with ESLint's recommended rule set, extend them both, making sure to list `episerver` last:

```js
{
  "extends": ["eslint:recommended", "episerver"],
  "rules": {
    // Additional, per-project rules...
  }
}
```

## License

MIT © Episerver
