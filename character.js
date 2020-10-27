class Character {
    constructor(hp, mp, weaponType) {
      this.hp = hp;
      this.mp = mp;
      this.weaponType = weaponType;
    }
  
    printInfo() {
      for (const key in this) {
        console.log(`${key}: ${this[key]}`);
      }
    }
  }
  
  module.exports = Character;