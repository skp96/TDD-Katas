class StringCalculator {

  add(string) {
    if (!string) {
      return 0;
    }
    if (string.length === 1) {
      return Number(string);
    }
    return this._sum(
      this._assertNegatives(
        this._parseString(string)
      )
    );
  };

  // Private Functions
  _parseString(string) {
    const delimiter = /,|\n/;

    const stringArray = string.split(delimiter);

    return stringArray.map(Number);
  }

  _assertNegatives(nums) {
    const negatives = nums.filter((n) => n < 0);
    
    if (negatives.length > 0) {
      throw new Error(`negative number are not allowed: ${negatives}`);
    }

    return nums;
  } 

  _sum(nums) {
    
    const sum = nums.reduce((acc, currVal) => acc + currVal);

    return sum;
  }
}

module.exports = StringCalculator