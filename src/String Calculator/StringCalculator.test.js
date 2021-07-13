const StringCalculator = require('./StringCalculator');

describe("String Calculator", () => {
  let stringCalc;

  beforeEach(() => {
    stringCalc = new StringCalculator();
  })

  test("Can call add method of object StringCalculator", () => {
    expect(stringCalc).toBeInstanceOf(StringCalculator)

    const spy = jest.spyOn(stringCalc, "add");
    stringCalc.add();

    expect(spy).toHaveBeenCalled();

    spy.mockRestore();
  });

  test("An empty string passed to add function returns 0", () => {
    expect(stringCalc.add("")).toEqual(0);
  })

  test("A single number returns the value", () => {
    expect(stringCalc.add("1")).toEqual(1);
    expect(stringCalc.add("2")).toEqual(2);
  })

  test("Two numbers, comma delimited, returns the sum", () => {
    expect(stringCalc.add("1,2")).toEqual(3);
    expect(stringCalc.add("10,20")).toEqual(30);
  })

  test("Two numbers, newline delimited, returns the sum", () => {
    expect(stringCalc.add("1\n2")).toEqual(3);
  })

  test("Three numbers, delimited either way returns the sum", () => {
    expect(stringCalc.add("1\n2,3\n4")).toEqual(10);
  })

  test("Negative numbers throw an exception", () => {
    expect(() => stringCalc.add("-1, 2, -3")).toThrow(new Error("negative number are not allowed: -1,-3"))
  })
});