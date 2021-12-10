export function renderGoblin(gobData) {
    const goblinEl = document.createElement('div');
    const gobImg = document.createElement('img');
    const name = document.createElement('p');
    const hp = document.createElement('p');

    goblinEl.classList.add('goblin');
    name.textContent = gobData.name;
    if (gobData.hp > 0) {
        gobImg.src = './assets/goblin.png';
    }
    else {
        gobImg.scr = './assets/goblin.jpeg';
        goblinEl.classList.add('dead');
    }

    goblinEl.append(name, gobImg, hp);
    console.log(goblinEl);
    return goblinEl;

}