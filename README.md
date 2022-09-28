# @larvit/eslint-config-esm

## Installation

`npm i -d eslint typescript@larvit/eslint-config-typescript-esm` or `yarn add -D eslint typescript@larvit/eslint-config-typescript-esm`

## Usage

In your local eslint configuration, for example `.eslintrc.json` for a node application extend this config like this:

```json
{
	"extends": [
		"@larvit/typescript-esm"
	],
	"env": {
		"node": true
	}
}
```