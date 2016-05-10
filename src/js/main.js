import $ from 'jquery';
import _ from 'lodash';

//importing modules from the classes js file
import {Game} from './classes/game';
import {Jedi} from './classes/jedi';
import {Sith} from './classes/sith';

//creating variables to link to input classes and button
let jediStatusBar = $('.jediStatus');
let sithStatusBar = $('.sithStatus');
let duelButton = $('.duel');

//making constructors to instantiate each variable
let game = new Game();
let jedi = new Jedi('Luke Skywalker');
let sith = new Sith('Darth Vader');

//making a click event for button
duelButton.on('click', function(event) {
  event.preventDefault();

//using lodash to set a random number of points to be targeted when jedi.attack or sith.attack is called
let hitpoints = _.random(1, 13);
jedi.attack(sith, sithStatusBar, hitpoints);

// using setTimeout to delay sith response by 1 sec
setTimeout(function() {
let hitpoints = _.random(1, 16);
sith.attack(jedi, jediStatusBar, hitpoints);
}, 1000);

game.checkStatus(jedi, sith);
});
