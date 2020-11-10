import maths from "./maths";

describe("@vta/eslint-config-jest modules-maths", () => {
  it("sum", () => {
    expect(maths.sum(10, 5)).toBe(15);
  });
  it("mul", () => {
    expect(maths.mul(10, 5)).toBe(50);
  });
});
