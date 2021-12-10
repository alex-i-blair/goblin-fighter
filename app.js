// import functions and grab DOM elements
import { hpMath } from './utils.js';
const playerHpEL = document.querySelector('.player-hp');
const goblin__El = document.querySelector('.goblin__');
const goblinHpEl = document.querySelector('.goblin-hp');
const defeatedGoblin__El = document.querySelector('.defeated-goblin__');
const defeatedNumEl = document.querySelector('.defeated-num');
const adventurerImgEl = document.querySelector('#jake-img');
const form = document.querySelector('form');
// let state

let playerHp = 100;
let defeatedGoblinCount = 0;
let goblin__ = [
    {
        name: 'Fred',
        hp: hpMath(15, 40)
    },
    {
        name: 'Jeff',
        hp: hpMath(15, 40)
    }
];

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const goblinName = data.get('goblin-name');
    const addGoblin = {
        name: goblinName,
        hp: hpMath(25, 50)
    };
    console.log(addGoblin);
    goblin__.push(addGoblin);
    console.log(goblin__);
});


// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
