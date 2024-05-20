import assert from "node:assert";
import test from "node:test";

test("Print out value in the Future", () => {
  const future = createFuture();

  assert.deepStrictEqual(future.display(), "");
});

test("Future contains a primitive value", () => {
  const future = createFuture(0);

  assert.deepStrictEqual(future.display(), "0");
});

function createFuture<T extends Object>(value?: T) {
  function display() {
    return value?.toString() ?? "";
  }

  return {
    display,
  };
}
