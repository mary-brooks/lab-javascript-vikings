// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage) {
    super.receiveDamage(damage);

    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }

  battleCry() {
    return 'Odin Owns You All!';
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    super.receiveDamage(damage);

    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(viking) {
    this.vikingArmy.push(viking);
  }

  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }

  vikingAttack() {
    return this.attack(this.vikingArmy, this.saxonArmy);

    // const randomViking =
    //   this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    // const randomSaxon =
    //   this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    // // Random Saxon receives damage equal to strength of random Viking
    // const attackResult = randomSaxon.receiveDamage(randomViking.strength);

    // // Remove dead Saxons
    // this.saxonArmy.forEach((saxon, saxonIndex) => {
    //   if (saxon.health <= 0) {
    //     this.saxonArmy.splice(saxonIndex, 1);
    //   }
    // });

    // // Return the result of the attack
    // return attackResult;
  }

  saxonAttack() {
    return this.attack(this.saxonArmy, this.vikingArmy);

    // const randomViking =
    //   this.vikingArmy[Math.floor(Math.random() * this.vikingArmy.length)];
    // const randomSaxon =
    //   this.saxonArmy[Math.floor(Math.random() * this.saxonArmy.length)];

    // // Random Viking receives damage equal to strength of random Saxon
    // const attackResult = randomViking.receiveDamage(randomSaxon.strength);

    // // Remove dead Vikings
    // this.vikingArmy.forEach((viking, vikingIndex) => {
    //   if (viking.health <= 0) {
    //     this.vikingArmy.splice(vikingIndex, 1);
    //   }
    // });

    // // Return the result of the attack
    // return attackResult;
  }

  attack(offense, defense) {
    // Select a random attacker and random defender
    const randomAttacker = this.randomWarrior(offense);
    const randomDefender = this.randomWarrior(defense);

    // randomDefender receives damage equal to the strength of randomAttacker
    const attackResult = randomDefender.receiveDamage(randomAttacker.strength);

    // Check health status of each defender and remove dead defenders
    defense.forEach((defender, defenderPosition) => {
      if (defender.health <= 0) {
        defense.splice(defenderPosition, 1);
      }
    });

    // return result of the attack
    return attackResult;
  }

  // Select a random warrior from a given army
  randomWarrior(army) {
    const warrior = army[Math.floor(Math.random() * army.length)];
    return warrior;
  }

  showStatus() {
    if (this.saxonArmy.length === 0) {
      return 'Vikings have won the war of the century!';
    } else if (this.vikingArmy.length === 0) {
      return 'Saxons have fought for their lives and survived another day...';
    } else {
      return 'Vikings and Saxons are still in the thick of battle.';
    }
  }
}
