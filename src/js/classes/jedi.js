export class Jedi {

  constructor(name) {
    this.name = name;
    this.health = 100;
  }
attack(sith, sithHealthbar, hitpoints) {
  sith.health = sith.health - hitpoints;
  sithHealthbar.val(sith.health);
  }
}
