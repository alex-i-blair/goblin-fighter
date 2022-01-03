import { damageAlert } from './render-utils.js';

export function hpMath(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
}
// let bigHit = false;
// let medHit = false;
// let mutualHit = false;
// let reflectHit = false;



export function attackMath() {
    let numRand = Math.ceil(Math.random() * 10);
    let attackDamage = 0;
    let selfDamage = 0;
    const damage__arr = {
        attackDamage,
        selfDamage,
    };

    if (numRand >= 9) {
        damage__arr.attackDamage = hpMath(11, 15);
        damageAlert('Big hit!');
    }
    else if (numRand >= 8) {
        damage__arr.attackDamage = hpMath(6, 10);
        damageAlert('Hit!');
    }
    else if (numRand >= 6) {
        damage__arr.attackDamage = hpMath(1, 5);
        damage__arr.selfDamage = hpMath(1, 5);
        damageAlert('Partial perry. You both took damage.');
    }
    else {
        damage__arr.selfDamage = hpMath(11, 15);
        damageAlert('Successful perry. You took damage!');
    }
    return damage__arr;
}