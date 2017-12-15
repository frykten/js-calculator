// Variables front
var viewer = $(".viewer");
var reset = $(".c");
var equals = $(".equals");
var ops = $(".op");
var nums = $(".num");
// Variables Back
var curNum, oldNum, operator;
// Variables Result
var result = "0";

// Functions for operations
var add = function (a, b) {
    return a + b;
};

var sub = function (a, b) {
    return a - b;
};

var mul = function (a, b) {
    return a * b;
};

var div = function (a, b) {
    return a / b;
};

// Functions to use/add/remove stuff
var addNF = function(curVal) {
    // If First number, reset
    if (result != "") {
        curNum = curVal;
        result = "";
        viewer.removeClass("error");
    }
    else
        curNum += curVal;
    
    viewer.text(curNum);
}

var addNum = function() {
    // Add number
    let curVal = $(this).attr("data-num");
    addNF(curVal);
};

var addNumKey = function(a) {
    let curVal = a;
    addNF(curVal);
};

var remKey = function() {
    // On backspace only, remove last char
    curNum = curNum.slice(0, curNum.length-1);
    viewer.text(curNum);
}

var addOF = function(curOp) {
    oldNum = curNum;
    curNum = "";
    operator = curOp;
    equals.attr("data-result", "");
    viewer.append(curOp);
}

var addOp = function() {
    // Add Operand
    let curOp = $(this).attr("data-op");
    addOF(curOp);
};

var addOpKey = function(a) {
    let curOp = a;
    addOF(curOp);
};

var submit = function() {
    // Get Float Numbers
    let a = parseFloat(oldNum);
    let b = parseFloat(curNum);
    
    // Calculus
    switch(operator) {
        case "+":
            result = add(a, b);
            break;
        case "-":
            result = sub(a, b);
            break;
        case "*":
            result = mul(a, b);
            break;
        case "/":
            result = div(a, b);
            break;
        default:
            result = curNum;
    }
    
    // Check if Number
    if (!isFinite(result)) {
        if (isNaN(result)) {
            result = "Ya fuckin' killed it";
        }
        else {
            result = "Ya beaver sucker";
        }
        // Toggle Error if not already there
        viewer.addClass("error");
    }
    
    // Result
    viewer.text(result);
    oldNum = 0;
    curNum = result;
};

var subRes = function() {
    // Reset
    viewer.removeClass("error");
    viewer.text("0");
    oldNum = "";
    curNum = "";
};


// On Clicks
nums.click(addNum);

ops.click(addOp);

equals.click(submit);

reset.click(subRes);


// Press keyboard
$(document).unbind("keydown").keydown(function(e) {
    // Debug
    console.log(e.which);
    
    // Switch to all the keys...
    switch(e.which) {
        // Press Enter
        case 13:
            submit();
            break;

        // Press Operands
        case 220 || 88 || 106:
            addOpKey("*");
            break;
        case 187:
            if (e.shiftKey == false) {
                submit();
                break;
            } else {
                addOpKey("+");
                break;
            }
        case 108:
            addOpKey("-");
            break;
        case 54:
            if (e.shiftKey == false) {
                addOpKey("-");
                break;
            } else {
                addNumKey(6);
                break;
            }
        case 191 || 109:
            addOpKey("/");
            break;
            
        // Press numbers
        case 48 || 96:
            addNumKey(0);
            break;
        case 49 || 97:
            addNumKey(1);
            break;
        case 50 || 98:
            addNumKey(2);
            break;
        case 51 || 99:
            addNumKey(3);
            break;
        case 52 || 100:
            addNumKey(4);
            break;
        case 53 || 101:
            addNumKey(5);
            break;
        case 54 || 102:
            addNumKey(6);
            break;
        case 55 || 103:
            addNumKey(7);
            break;
        case 56 || 104:
            addNumKey(8);
            break;
        case 57 || 105:
            addNumKey(9);
            break;
        case 190:
            addNumKey(".");
            break;
        case 188:
            addNumKey(".");
            break;
            
        // Press Backspace 
        case 8:
            remKey();
            break;
        
        // If nope
        default:
            console.log("");
            break;
    }
});