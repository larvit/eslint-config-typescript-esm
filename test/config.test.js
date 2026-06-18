import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";

import { Linter } from "eslint";

import config from "../index.js";

const here = dirname(fileURLToPath(import.meta.url));
const linter = new Linter();
const lintFixture = name => linter.verify(readFileSync(join(here, "fixtures", name), "utf8"), config, { filename: name });

test("clean TypeScript passes with no messages", () => {
	const messages = lintFixture("good.ts");

	assert.deepEqual(messages, [], JSON.stringify(messages, null, 2));
});

test("violations are reported across @stylistic, typescript-eslint and perfectionist", () => {
	const ruleIds = new Set(lintFixture("bad.ts").map(message => message.ruleId));

	for (const expected of ["@stylistic/quotes", "@typescript-eslint/no-unused-vars", "no-var", "perfectionist/sort-enums", "perfectionist/sort-interfaces"]) {
		assert.ok(ruleIds.has(expected), `expected rule ${expected}, got: ${[...ruleIds].join(", ")}`);
	}
});
