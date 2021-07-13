
class PrimeFactors {

  generate(num) {
    const factors = []
    
    let divisor = 2;

    while (num > 1) {
      while (num % divisor === 0) {
        factors.push(divisor);
        num /= divisor;
      }
      divisor += 1
    }

    if (num > 1) {
      factors.push(n);
    }
    
    return factors
  }
}

module.exports = PrimeFactors