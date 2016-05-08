export class Game {

  constructor() {
    this.status = 'engage';
  }

  checkStatus(jedi, sith){

  if (jedi.health <= 0) {
    this.status = 'The Sith rule the Galaxy!';
    alert(this.status);
  } else if (sith.health <= 0) {
    this.status = 'The Jedi have brought peace to the Galaxy!';
    alert(this.status);
  }

  }
}
