import assert from "node:assert";
import test from "node:test";

test("Create a Future", () => {
  const future = createFuture();

  assert.deepStrictEqual(future, {});
});

function createFuture() {
  return {};
}
