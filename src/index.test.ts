import assert from "node:assert";
import test from "node:test";

test("Create a Future", () => {
  const future = createFuture();

  assert.deepStrictEqual(future, {});
});

test("Print out value in the Future", () => {
  const future = createFuture();

  assert.deepStrictEqual(future.display(), "");
});

function createFuture() {
  function display() {
    return "";
  }

  return {
    display,
  };
}
