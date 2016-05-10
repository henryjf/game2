
//creating a class
export class Game {
  constructor() {
    this.status = 'engage';
    // this.url = ../images/badguyswin.png;
  }

//making a function with conditionals that return a value based on which health reaches 0 first
  checkStatus(jedi, sith){

  if (jedi.health <= 0) {
    this.status = 'The Sith rule the Galaxy!';
    // this.url =('../images/badguyswin.png');
    document.write(this.status);
  } else if (sith.health <= 0) {
    this.status = 'The Jedi have brought peace to the Galaxy!';
    // this.url =('../images/badguyswin.png');
    alert(this.status);

  }

  }
}
