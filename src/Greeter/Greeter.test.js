const Greeter = require('./Greeter');


describe("Greeter", () => {
  
  describe("Test cases for Hello greeting", () => {
    let greetHello;
    beforeEach(() => {
      greetHello = new Greeter();
      expect(greetHello).toBeInstanceOf(Greeter);
    })

    test("Can greet a person and output their name", () => {
      expect(greetHello.greet("Sunny")).toEqual("Hello Sunny!")
    });

    test("Greet function should trim the input", () => {
      expect(greetHello.greet("   Sunny  ")).toEqual("Hello Sunny!")
    });

    test("Capitalize the first letter of the name", () => {
      expect(greetHello.greet("sunny")).toEqual("Hello Sunny!")
    });

    test("Greet logs each time", () => {
      const consoleSpy = jest.spyOn(console, 'log').mockImplementation(jest.fn());

      greetHello.greet('sunny')
      expect(console.log).toBeCalledTimes(1);
      expect(console.log).toHaveBeenLastCalledWith("Hello Sunny!")

      consoleSpy.mockClear();
    })
  });

  describe("Test cases for different greetings", () => {
    let greet;
    let date;

    beforeEach(() => {
      date = new Date();
      greet = new Greeter(date);
    });

    test("Greet with Good morning", () => {
      date.setHours(6);
      expect(greet.greet("sunny")).toEqual("Good morning Sunny!");

      date.setHours(8);
      expect(greet.greet("sunny")).toEqual("Good morning Sunny!");

      date.setHours(11);
      expect(greet.greet("sunny")).toEqual("Good morning Sunny!");
    })

    test("Greet with Good evening", () => {
      date.setHours(18);
      expect(greet.greet("sunny")).toEqual("Good evening Sunny!");

      date.setHours(20);
      expect(greet.greet("sunny")).toEqual("Good evening Sunny!");

      date.setHours(21);
      expect(greet.greet("sunny")).toEqual("Good evening Sunny!");
    })

    test("Greet with Good night", () => {
      date.setHours(22);
      expect(greet.greet("sunny")).toEqual("Good night Sunny!");

      date.setHours(3);
      expect(greet.greet("sunny")).toEqual("Good night Sunny!");

      date.setHours(24);
      expect(greet.greet("sunny")).toEqual("Good night Sunny!");
    })
    
  })
});