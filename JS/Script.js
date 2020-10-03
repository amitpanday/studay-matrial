const screen = document.getElementById('screen');
let value1 = ''; // false;
let value2 = ''; //false;
let operation = '+';
let operPressed = false;
let total = 0;


function onNumClick(value) {
    value = value.toString();
    if(operPressed){
        value2 = value2 + value;
        screen.innerHTML =value1 + operation + value2;
    }else{
        value1 = value1 + value;
        screen.innerHTML = value1;
    }
    console.log(value);
}

function onOprationClick (value) {
    value = value.toString();
    operPressed = true;
    operation = value;
    let privousValue = screen.innerHTML.toString();
    screen.innerHTML = privousValue + value;
    console.log(value,operPressed);
}

function totalValue (){
    switch (operation) {
		case '+':
			total = parseInt(value1) + parseInt(value2);
			break;
		case '-':
			total = parseInt(value1) - parseInt(value2);
			break;
		case '/':
			total = parseInt(value1) / parseInt(value2);
			break;
		case '*':
			total = parseInt(value1) * parseInt(value2);
			break;
		default:
			return false;
	}
	total = total.toString();
    screen.innerHTML = total;
    console.log(value1,operation, value2,'total =>',total);
}