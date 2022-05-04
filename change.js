async function sleep(mili) {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, mili);
    });
}

async function hide(id) {
    let a = document.getElementById(id);
    a.style.opacity = '0';
    await sleep(500);
    a.style.display = 'none';
    
}

async function show(id) {
    let a = document.getElementById(id);
    a.style.opacity = '1';
    await sleep(500);
    a.style.display = 'block';
}

async function changeTemp(temp, color="") {
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
    hide('fan');
    hide('machine');
    show('ac');
    changeTemp(28,'#c99a3c');
}

function fan(){
    hide('ac');
    hide('machine');
    show('fan');
    changeTemp(35, '#ee4c54');
}

function machine() {
    hide('ac');
    hide('fan');
    show('machine');
    changeTemp(18, '#5768c9')
}

hide('ac');
hide('machine');
hide('fan');