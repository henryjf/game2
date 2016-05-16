
//using class declaration to create a constructor to define name and health
export class Jedi {
  constructor(name) {
    this.name = name;
    this.health = 100;
  };

//function that determines character health by operator
attack(sith, sithHealthbar, hitpoints) {
  sith.health = sith.health - hitpoints;

//shows the value assigned to the healthbar
  sithHealthbar.val(sith.health);
  };
};
