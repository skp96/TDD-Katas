
class Greeter {
  constructor(date = null) {
    this.date = date;
  }

  greet(name) {
    const getName = name.charAt(0).toUpperCase() + name.slice(1);

    if (!this.date) {
      console.log(`Hello ${getName.trim()}!`)
      return `Hello ${getName.trim()}!`;
    }
    const currentTime = new Date(this.date);
    const hourOfDay = currentTime.getHours();

    const setGreeting = this._getGreeting(hourOfDay)

    console.log(`${setGreeting} ${getName}!`)

    return `${setGreeting} ${getName}!`
  }

  // Private Functions

  _getGreeting(hourOfDay) {
    switch(true) {
      case hourOfDay >= 6 && hourOfDay < 12:
        return "Good morning"
      case hourOfDay >= 18 && hourOfDay < 22:
        return "Good evening"
      default:
        return "Good night"
    }
  }

}

module.exports = Greeter;