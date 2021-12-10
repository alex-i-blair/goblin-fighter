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
    }
    else if (numRand >= 6) {
        damage__arr.attackDamage = hpMath(6, 10);
    }
    else if (numRand >= 3) {
        damage__arr.attackDamage = hpMath(1, 5);
        damage__arr.selfDamage = hpMath(1, 5);
    }
    else {
        damage__arr.selfDamage = hpMath(11, 15);
    }
    return damage__arr;
}