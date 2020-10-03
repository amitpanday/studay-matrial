const btn1 = document.getElementById('btn1').value;
const btn2 = document.getElementById('btn2').value;
const btn3 = document.getElementById('btn3').value;
const btn4 = document.getElementById('btn4').value;
const btn5 = document.getElementById('btn5').value;
const btn6 = document.getElementById('btn6').value;
const btn7 = document.getElementById('btn7').value;
const btn8 = document.getElementById('btn8').value;
const btn9 = document.getElementById('btn9').value;
const btn10 = document.getElementById('btn10').value;
const btn11 = document.getElementById('btn11').value;
const btn12 = document.getElementById('btn12').value;
const btn13 = document.getElementById('btn13').value;
const btn14 = document.getElementById('btn14').value;
const btn15 = document.getElementById('btn15').value;
const btn16 = document.getElementById('btn16').value;
const btn17 = document.getElementById('btn17').value;
const btn18 = document.getElementById('btn18').value;
const btn19 = document.getElementById('btn19').value;
const btn20 = document.getElementById('btn20').value;

// let screen = document.getElementById('screen');
// screen = document.setAttribute('screen', val)

//function that display value 
function onClickButton(val) {
    // console.log(val);
    let op = document.getElementById("screen").innerHTML += val;
    document.getElementById("screen").innerHTML = op;
    //     // document.getElementById('screen').value += val
    //     // document.setAttribute('screen', `&{val}`);
    //     let screen = (`&{val}`);
    //     console.log(screen);
    // 
}

//function that display value 
// function onClickButton(val) {

// }

//function that clear the display 
function onClickButton1() {
    document.getElementById("screen").innerHTML = ""
}

//function that delete the no
function onClickButton2() {
    document.getElementById("screen").innerHTML = val - val;
}