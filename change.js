function random(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a);
}

async function sleep(mili) {
    return new Promise(function (resolve, reject) {
        setTimeout(resolve, mili);
    });
}

function hideAll() {
    for (let i of document.querySelectorAll('.swap-area')) {
        i.style.display = 'none';
    }
}

/**
 * hide an element with animation
 * @param {string} id The id of the element
 */
async function hide(id) {
    let a = document.getElementById(id);
    a.style.opacity = '0';
    await sleep(500);
    a.style.display = 'none';

}

/**
 * show an element with animation
 * @param {string} id The id of the element
 */
async function show(id) {
    let a = document.getElementById(id);
    a.style.opacity = '1';
    await sleep(500);
    a.style.display = 'block';
}

// change the temp with animation effects
async function changeTemp(temp, color = "") {
    let num = document.getElementById('temp-num');
    num.style.fontSize = '0px';
    num.style.opacity = '0';
    await sleep(300);
    if (color != "") {
        num.style.color = color;
    }
    num.innerHTML = temp;
    num.style.fontSize = '50px';
    num.style.opacity = '1';
}

function ac() {
    hideAll();
    show('ac');
    changeTemp(28, '#c99a3c');
}

function fan() {
    hideAll();
    show('fan');
    changeTemp(35, '#ee4c54');
}

function machine() {
    hideAll();
    show('machine');
    changeTemp(18, '#5768c9')
}

function maxwell() {
    hideAll();
    show('maxwell');
    changeTemp(-273.15, '#da00e6');
}

// main func here
window.onload = () => {
    // first hide all machines
    hideAll();
    // random move machine
    setInterval(function () {
        let machine = document.getElementById('machine');
        if (machine.style.display == 'none') { return; }
        machine.style.transform = "translate("
            + random(-20, 20)
            + "px, "
            + random(-20, 20)
            + "px) rotate("
            + random(-10, 10) + "deg)";
    }, 50)
    // random move maxwell
    setInterval(function () {
        let maxw = document.getElementById('maxwell');
        if (maxw.style.display == 'none') { return; }
        maxw.style.transform = "translate("
            + random(-200, 200)
            + "px, "
            + random(-200, 200)
            + "px) rotate("
            + random(-100, 100) + "deg) scale("
            + Math.random() * 1.5 + 1 + ")";
    }, 1000)

}
