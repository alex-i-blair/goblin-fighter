export function renderGoblin(gobData) {
    const goblinEl = document.createElement('div');
    const gobImg = document.createElement('img');
    const name = document.createElement('p');
    const hp = document.createElement('p');

    goblinEl.classList.add('goblin');
    name.textContent = gobData.name;
    hp.textContent = `HP = ${gobData.hp}`;
    if (gobData.hp > 0) {
        gobImg.src = './assets/goblin.png';
    }
    else {
        gobImg.src = './assets/dead.png';
        goblinEl.classList.add('dead');
    }

    goblinEl.append(name, hp, gobImg);
    // console.log(goblinEl);
    return goblinEl;

}

export function damageAlert(msg)
{
    const damageAlert = document.createElement('div');
    damageAlert.classList.add('damage-alert');
    
    damageAlert.innerHTML = '<h1>' + msg + '</h1>';
    setTimeout(function()
    {
        damageAlert.parentNode.removeChild(damageAlert);
    }, '1000');
    document.body.appendChild(damageAlert);
}

export function deathAlert(msg)
{
    const damageAlert = document.createElement('div');
    damageAlert.classList.add('death-alert');
    
    damageAlert.innerHTML = '<h1>' + msg + '</h1>';
    setTimeout(function()
    {
        damageAlert.parentNode.removeChild(damageAlert);
    }, '4000');
    document.body.appendChild(damageAlert);
}