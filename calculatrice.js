// Variables front
var viewerPanel = document.querySelector('#viewer');
var resetButton = document.querySelector('#reset');
var equalsButton = document.querySelector('#equals');
var operatorButtons = document.querySelectorAll('.op');
var numberButtons = document.querySelectorAll('.num');
// Variables Back
var currentNumberStocked, firstNumberStocked, operatorStocked;
// Variables Result
var resultToPrint = '0';
const emptyVariableToResets = '';


// Functions for operations
const add = function (a, b) {
    return a + b;
};

const sub = function (a, b) {
    return a - b;
};

const mul = function (a, b) {
    return a * b;
};

const div = function (a, b) {
    return a / b;
};


// Functions to use/add/remove stuff
var changeViewerText = function(newTextToPrint) {
    viewerPanel.innerHTML = newTextToPrint;
}

var changeViewerClass = function(isError) {
  if (isError === 'isError')
    viewerPanel.classList.add('error');
  else 
    viewerPanel.classList.remove('error');
}

var addNumberViaClick = function() {
    // Add number
    let currentEnteringValue = this.dataset.num;
    addNumberToCounts(currentEnteringValue);
};

var addNumberViaKey = function(a) {
    let currentEnteringValue = a;
    addNumberToCounts(currentEnteringValue);
};

var removeNumberViaKey = function() {
    // On backspace only, remove last char
    currentNumberStocked = currentNumberStocked.slice(0, currentNumberStocked.length-1);
    changeViewerText(currentNumberStocked);
}

var addNumberToCounts = function(currentEnteringValue) {
    // If First number, reset
    if (resultToPrint != '') {
        resetCalculusIfNotAlready(currentEnteringValue)
    }
    // Else add numbers
    else
        currentNumberStocked += currentEnteringValue;
    
    changeViewerText(currentNumberStocked);
}

var resetCalculusIfNotAlready = function(currentEnteringValue) {
    if (firstNumberStocked === 0)
        firstNumberStocked = resultToPrint;
  
    currentNumberStocked = currentEnteringValue;
    resultToPrint = emptyVariableToResets;
    changeViewerClass('isNotError')
}

var addOperatorViaClickToMath = function(currentOperator) {
    if (currentNumberStocked && firstNumberStocked) {
        submit();
        return operatorStocked = currentOperator;
    }

    if (operatorStocked) {
        let txtWithNewOperator = viewerPanel.innerHTML.slice(0, viewerPanel.innerHTML.length-1)
        changeViewerText(txtWithNewOperator + currentOperator)

        return operatorStocked = currentOperator;
    }
  
    firstNumberStocked = currentNumberStocked;
    currentNumberStocked = emptyVariableToResets;
    operatorStocked = currentOperator;
    equalsButton.dataset.result = '';
    viewerPanel.append(currentOperator);
}

var addOperatorViaClick = function() {
    // Add Operand
    let currentOperator = this.dataset.op;
    addOperatorViaClickToMath(currentOperator);
};

var addOperatorViaKeyboard = function(a) {
    let currentOperator = a;
    addOperatorViaClickToMath(currentOperator);
};

var submit = function() {
    // Get Float Numbers
    let a = parseFloat(firstNumberStocked);
    let b = parseFloat(currentNumberStocked);
    
    // Calculus
    switch(operatorStocked) {
        case "+":
            resultToPrint = add(a, b);
            break;
        case "-":
            resultToPrint = sub(a, b);
            break;
        case "*":
            resultToPrint = mul(a, b);
            break;
        case "/":
            resultToPrint = div(a, b);
            break;
        default:
            resultToPrint = currentNumberStocked;
    }
    
    // Check if Number
    if (!isFinite(resultToPrint)) {
        if (isNaN(resultToPrint)) {
            resultToPrint = "Ya killed it";
        }
        else {
            resultToPrint = "Ya beaver friend";
        }
        // Toggle Error if not already there
        changeViewerClass('isError')
    }
    
    // Result
    changeViewerText(resultToPrint);
    firstNumberStocked = 0;
    operatorStocked = emptyVariableToResets;
    currentNumberStocked = resultToPrint;
};

var reset = function() {
    // Reset
    changeViewerClass('isNotError');
    changeViewerText('0');
    firstNumberStocked = emptyVariableToResets;
    currentNumberStocked = emptyVariableToResets;
    operatorStocked = emptyVariableToResets;
};


// Setting On Click Behaviours
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].onclick = addNumberViaClick;
}

for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].onclick = addOperatorViaClick;
}

equalsButton.onclick = submit;

resetButton.onclick = reset;


// Press keyboard
//{
//  $(document).unbind('keydown').keydown(function(e) {
//    // Debug
//    console.log(e.which);
//    
//    // Switch to all the keys...
//    switch(e.which) {
//        // Press Enter
//        case 13:
//            submit();
//            break;
//
//        // Press Operands
//        case 220 || 88 || 106:
//            addOperatorViaKeyboard('*');
//            break;
//        case 187:
//            if (e.shiftKey == false) {
//                submit();
//                break;
//            } else {
//                addOperatorViaKeyboard('+');
//                break;
//            }
//        case 108:
//            addOperatorViaKeyboard('-');
//            break;
//        case 54:
//            if (e.shiftKey == false) {
//                addOperatorViaKeyboard('-');
//                break;
//            } else {
//                addNumberViaKey(6);
//                break;
//            }
//        case 191 || 109:
//            addOperatorViaKeyboard('/');
//            break;
//            
//        // Press numbers
//        case 48 || 96:
//            addNumberViaKey(0);
//            break;
//        case 49 || 97:
//            addNumberViaKey(1);
//            break;
//        case 50 || 98:
//            addNumberViaKey(2);
//            break;
//        case 51 || 99:
//            addNumberViaKey(3);
//            break;
//        case 52 || 100:
//            addNumberViaKey(4);
//            break;
//        case 53 || 101:
//            addNumberViaKey(5);
//            break;
//        case 54 || 102:
//            addNumberViaKey(6);
//            break;
//        case 55 || 103:
//            addNumberViaKey(7);
//            break;
//        case 56 || 104:
//            addNumberViaKey(8);
//            break;
//        case 57 || 105:
//            addNumberViaKey(9);
//            break;
//        case 190:
//            addNumberViaKey('.');
//            break;
//        case 188:
//            addNumberViaKey('.');
//            break;
//            
//        // Press Backspace 
//        case 8:
//            removeNumberViaKey();
//            break;
//        
//        // If nope
//        default:
//            console.log('Not Happening!');
//            break;
//    }
//});
//}