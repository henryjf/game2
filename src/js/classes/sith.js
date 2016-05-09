
//using class declaration to create a constructor to define name and health
export class Sith {
  constructor(name) {
    this.name = name;
    this.health = 100;
  };
//function that determines character health by operator
  attack(jedi, jediHealthbar, hitpoints) {
    jedi.health = jedi.health - hitpoints;

    //using .val to get value of input element
    jediHealthbar.val(jedi.health);
  }
}
