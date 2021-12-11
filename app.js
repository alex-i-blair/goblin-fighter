// import functions and grab DOM elements
import { hpMath, attackMath } from './utils.js';
import { renderGoblin } from './render-utils.js';

const playerHpEl = document.querySelector('#player-hp');
const goblin__El = document.querySelector('.goblin__');
const defeatedGoblin__El = document.querySelector('#defeated-goblin__');
const defeatedNumEl = document.querySelector('#defeated-num');
const adventurerImgEl = document.querySelector('#jake-img');
const form = document.querySelector('form');
// let state

let playerHp = 100;
playerHpEl.textContent = playerHp;
let defeatedGoblinCount = 0;
defeatedNumEl.textContent = defeatedGoblinCount;
let goblin__arr = [
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
    // console.log(addGoblin);
    goblin__arr.push(addGoblin);
    // console.log(goblin__arr);

    displayGoblin__();
});

function displayGoblin__() {
    goblin__El.textContent = '';
    for (let goblin of goblin__arr) {
        const goblinEl = renderGoblin(goblin);
        
        if (goblin.hp > 0) {
            goblinEl.addEventListener('click', () => {
                
                let damage = attackMath();
                playerHp = playerHp - damage.selfDamage;
                goblin__arr.hp = goblin__arr.hp - damage.attackDamage;

                if (goblin.hp === 0) {
                    defeatedGoblinCount++;
                }
                if (playerHp === 0) {
                    adventurerImgEl.classList.add('game-over');
                    alert('YOU DIED!\nGame Over');
                }
                console.log(goblinEl);
                playerHpEl.textContent = playerHp;
                defeatedGoblin__El.textContent = defeatedGoblinCount;
                displayGoblin__();
            });
        } 
        goblin__El.append(goblinEl);
        
    }
}
displayGoblin__();
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
