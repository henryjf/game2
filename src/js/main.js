import $ from 'jquery';
import _ from 'lodash';

import {Game} from './classes/game';
import {Jedi} from './classes/jedi';
import {Sith} from './classes/sith';

let jediStatusBar = $('.jediStatus');
let sithStatusBar = $('.sithStatus');
let duelButton = $('.duel');

let game = new Game();
let jedi = new Jedi('Luke Skywalker');
let sith = new Sith('Darth Vader');

duelButton.on('click', function(event) {
  event.preventDefault();

let hitpoints = _.random(1, 16);
jedi.attack(sith, sithStatusBar, hitpoints);

setTimeout(function() {
let hitpoints = _.random(1, 17);
sith.attack(jedi, jediStatusBar, hitpoints);
}, 1000);

game.checkStatus(jedi, sith);
});
