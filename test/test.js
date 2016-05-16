// Import Chai
import chai from 'chai';

// Import Any Files to Test
import '../src/js/main';

// Set Chai Constants
const expect = chai.expect;
const should = chai.should();
const assert = chai.assert;

describe('Testing Game Class', function () {

  let game;

  // describe('Testing the Creation of Something', function () {
  beforeEach( function () {
    game = new Game();
  });

    // it('should exist after we create it', function () {
    //   let x = new Object;
    //   expect(x).to.be.an.instanceof(Object);
    // });
    it('should be an instance of game', function () {
      expect(game).to.be.an.instanceof(Game);
    });

    it('should end the game when game character health points are <= 0', function () {
      game.jedi.health <= 0;
      expect(game.checkStatus).to.equal('The Sith rule the Galaxy!');
    });



  });


// });
