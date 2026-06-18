# @larvit/eslint-config-typescript-esm

Shareable [flat config](https://eslint.org/docs/latest/use/configure/configuration-files) for ESLint 9+ targeting TypeScript ESM projects. Builds on [`@larvit/eslint-config-esm`](https://github.com/larvit/eslint-config-esm) and adds [typescript-eslint](https://typescript-eslint.io/), TS-aware [`@stylistic`](https://eslint.style/) formatting and [`perfectionist`](https://perfectionist.dev/) interface/type/enum sorting.

## Installation

```sh
npm install --save-dev eslint typescript globals @larvit/eslint-config-typescript-esm
```

## Usage

In your `eslint.config.js`:

```js
import larvit from "@larvit/eslint-config-typescript-esm";
import globals from "globals";

export default [
	...larvit,
	{
		languageOptions: {
			globals: globals.node,
		},
	},
];
```

`globals.node` here is the flat-config replacement for the old `env: { node: true }`. Use `globals.browser` for browser code.

The TypeScript rules are scoped to `*.ts`/`*.tsx`/`*.mts`/`*.cts`; plain `.js` files get the base ESM config only. The bundled `typescript-eslint` `recommended` preset is non-type-checked, so no `tsconfig` wiring is required.
