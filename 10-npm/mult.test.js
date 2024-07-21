const mult = require("./mult");

test("multiplies 2 * 3 to equal 6", () => {
  expect(mult(2, 3)).toBe(6);
});

test("multiplies 3 * 3 to equal 9", () => {
  expect(mult(3, 3)).toBe(9);
});


