const sum = require("./sum");
const mockFunc = require("./mock");
const student = require("./spy");

describe("summation functions", () => {
  it("should add 2 numbers", () => {
    expect(sum(1, 2)).toBe(3);
  });

  it("should validate object", () => {
    const data = { one: 1, two: 2 };
    expect(data).toEqual({ one: 1, two: 2 });
  });

  it("should mock the implementation of mockFunc", () => {
    expect(mockFunc(10)).toBe(30);
  });

  it("should spy the student object func", () => {
    const spy = jest.spyOn(student, "play");

    student.play();

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  });
});
