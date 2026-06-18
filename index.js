import larvit from "@larvit/eslint-config-esm";
import perfectionist from "eslint-plugin-perfectionist";
import tseslint from "typescript-eslint";

// `@stylistic` is registered globally by the base config, so its rules resolve on
// `.ts` files too. Here we only re-enable the TS-aware @stylistic rules the base
// leaves off, add the @typescript-eslint logical rules and perfectionist sorting.
export default tseslint.config(
	...larvit,
	{
		"extends": [...tseslint.configs.recommended],
		"files": ["**/*.cts", "**/*.mts", "**/*.ts", "**/*.tsx"],
		"plugins": {
			perfectionist,
		},
		"rules": {
			"@stylistic/brace-style": ["error", "1tbs", { "allowSingleLine": true }],
			"@stylistic/comma-spacing": ["error", { "after": true, "before": false }],
			"@stylistic/function-call-spacing": ["error", "never"],
			"@stylistic/keyword-spacing": ["error", { "after": true, "before": true }],
			"@stylistic/lines-between-class-members": ["error", "always", { "exceptAfterSingleLine": true }],
			"@stylistic/no-extra-parens": ["error", "all", { "ignoreJSX": "multi-line", "nestedBinaryExpressions": false }],
			"@stylistic/object-curly-spacing": ["error", "always"],
			"@stylistic/space-before-function-paren": ["error", { "anonymous": "always", "asyncArrow": "always", "named": "never" }],
			"@stylistic/space-infix-ops": ["error"],
			"@typescript-eslint/member-ordering": ["off"],
			"@typescript-eslint/no-explicit-any": ["off"],
			"@typescript-eslint/no-redeclare": ["error"],
			"@typescript-eslint/no-shadow": ["off"],
			"@typescript-eslint/no-unused-expressions": ["error"],
			"@typescript-eslint/no-unused-vars": ["error", { "caughtErrors": "all" }],
			"@typescript-eslint/no-use-before-define": ["error", { "classes": true, "functions": true, "variables": true }],
			"perfectionist/sort-enums": ["error", { "ignoreCase": false, "order": "asc", "type": "natural" }],
			"perfectionist/sort-interfaces": ["error", { "ignoreCase": false, "order": "asc", "type": "natural" }],
			"perfectionist/sort-object-types": ["error", { "ignoreCase": false, "order": "asc", "type": "natural" }],
		},
	},
);
