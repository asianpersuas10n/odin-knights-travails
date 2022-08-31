const knightMoves = require("./js");

test("returns message", () => {
  expect(knightMoves([0, 0], [1, 2])).toBe(
    "  => You made it in 1 moves!  Here's your path: [0,0] => [1,2]"
  );
});

test("returns message on more complex start", () => {
  expect(knightMoves([3, 3], [0, 0])).toBe(
    "  => You made it in 2 moves!  Here's your path: [3,3] => [1,2] => [0,0]"
  );
});

test("returns null if start is out of array bounds", () => {
  expect(knightMoves([10, -100], [0, 0])).toBeNull();
});

test("returns null if end is out of array bounds", () => {
  expect(knightMoves([3, 3], [-10, 100])).toBeNull();
});
