const sum = require("./sum");
describe("summation functions", () => {
  it("should add 2 numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("should validate object", () => {
    const data = { one: 1, two: 2 };
    expect(data).toEqual({ one: 1, two: 2 });
  });
});
