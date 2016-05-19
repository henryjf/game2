// Import Chai
import chai from 'chai';

// Import Any Files to Test
// import '../src/js/main';
import {Game} from '../src/js/classes/game';
import {Jedi} from '../src/js/classes/jedi';
import {Sith} from '../src/js/classes/sith';

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

  // });
});



describe('Testing Sith Class', function() {

  let sith;

  beforeEach( function () {
    sith = new Sith();
  });

  it('should be an instance of sith', function() {
    expect(sith).to.be.an.instanceof(Sith);
  });

});



  describe('Testing Jedi Class', function() {

    let jedi;

    beforeEach( function () {
      jedi = new Jedi();
    })

    it('should be an instance of jedi', function() {
      expect(jedi).to.be.an.instanceof(Jedi);
    });



  });


// });
