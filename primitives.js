'use strict';

/*
 * Create a constant variables for each primitives
 * `str`, `num`, `bool` and `undef`
 *
 * @notions Primitive and Operators, Variables
 */

// Your code:

//* Begin of tests
const assert = require('assert');

const str = String;
const num = Number;
const bool = Boolean;
const undef = undefined;

assert.strictEqual(typeof str, 'string');
assert.strictEqual(str, '1337');

assert.strictEqual(typeof num, 'number');
assert.strictEqual(num, 42);

assert.strictEqual(typeof bool, 'boolean');
assert.strictEqual(bool, false);

assert.strictEqual(typeof undef, 'undefined');
assert.strictEqual(undef, undefined);
// End of tests */
