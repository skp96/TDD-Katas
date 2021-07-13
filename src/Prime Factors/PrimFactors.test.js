const PrimeFactors = require('./PrimeFactors');

describe("Prime Factors", () => {

  let primeFactors;
  beforeEach(() => {
    primeFactors = new PrimeFactors()
  })

  test("Can call function generate of PrimeFactors", () => {
    expect(primeFactors).toBeInstanceOf(PrimeFactors);

    const spy = jest.spyOn(primeFactors, "generate");
    primeFactors.generate()

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
  })

  test("Given an integer of 1, the generate function should return []", () => {
    expect(primeFactors.generate(1)).toEqual([]);
  })

  test("Given an integer of 2, the generate function should return [2]", () => {
    expect(primeFactors.generate(2)).toEqual([2]);
  })

  test("Given an integer of 3, the generate function should return [3]", () => {
    expect(primeFactors.generate(3)).toEqual([3]);
  })

  test("Given an integer of 4, the generate function should return [2, 2]", () => {
    expect(primeFactors.generate(4)).toEqual([2, 2]);
  })

  test("Given an integer of 16, the generate function should return [2, 2, 2, 2]", () => {
    expect(primeFactors.generate(4)).toEqual([2, 2]);
  })
})