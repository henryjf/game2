export class Sith {
  constructor(name) {
    this.name = name;
    this.health = 100;
  };

  attack(jedi, jediHealthbar, hitpoints) {
    jedi.health = jedi.health - hitpoints;
    jediHealthbar.val(jedi.health);
  }
}
