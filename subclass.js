const Character = require("./character");

class Wizard extends Character {
  constructor(hp, mp, weaponType, element, summon) {
  super(hp, mp, weaponType);
    this.element = element
    this.summon = summon
  }
}

const wizard = new Wizard(15, 9, "staff", "fire", "fluffykins");
wizard.printInfo();