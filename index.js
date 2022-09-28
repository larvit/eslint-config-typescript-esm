module.exports = {
	"extends": [
		"@larvit/esm",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended"
	],
	"rules": {
		"@typescript-eslint/brace-style": ["error", "1tbs", { "allowSingleLine": true }],
		"@typescript-eslint/comma-dangle": ["error", "always-multiline"],
		"@typescript-eslint/comma-spacing": ["error", { "before": false, "after": true }],
		"@typescript-eslint/func-call-spacing": ["error", "never"],
		"@typescript-eslint/keyword-spacing": ["error", { "before": true, "after": true }],
		"@typescript-eslint/lines-between-class-members": ["error", "always", { "exceptAfterSingleLine": true }],
		"@typescript-eslint/no-explicit-any": ["off"],
		"@typescript-eslint/member-ordering": ["off"],
		"@typescript-eslint/no-extra-parens": ["error", "all", { "nestedBinaryExpressions": false, "ignoreJSX": "multi-line"}],
		"@typescript-eslint/no-redeclare": ["error"],
		"@typescript-eslint/no-shadow": ["off"],
		"@typescript-eslint/no-unused-expressions": ["error"],
		"@typescript-eslint/no-unused-vars": ["error", { "caughtErrors": "all" }],
		"@typescript-eslint/no-use-before-define": ["error", { "functions": true, "classes": true, "variables": true }],
		"@typescript-eslint/object-curly-spacing": ["error", "always"],
		"@typescript-eslint/quotes": ["error", "double"],
		"@typescript-eslint/space-before-function-paren": ["error", { "anonymous": "always", "named": "never", "asyncArrow": "always" }],
		"@typescript-eslint/space-infix-ops": ["error"],
		"typescript-sort-keys/interface": ["error", "asc", { "caseSensitive": true, "natural": true, "requiredFirst": false }],
		"typescript-sort-keys/string-enum": ["error", "asc", { "caseSensitive": true, "natural": true }]
	},
	"plugins": [
		"@typescript-eslint",
		"typescript-sort-keys"
	]
}