/*
    1- create function to handle numbers btns
    2- create functionm to handle operators
    3- display number value in the input
    4- handle prev value
    5- handle operation
    6- handle new value
    7- create equal functionality

*/
/*VanillaTitle.init(document.querySelector(".calc"),{
    max:25,
    speed:400
});*/
// تعريف متغيرات بالزرايرالارقام و input
const btnClear    = document.querySelector("#btn-clear");
const btnNavigate = document.querySelector("#btn-navigate");
const btnBkSpace  = document.querySelector("#btn-bkspace");
const btnAdd      = document.querySelector("#btn-add");
const btn7        = document.querySelector("#btn-7");
const btn8        = document.querySelector("#btn-8");
const btn9        = document.querySelector("#btn-9");
const btnSub      = document.querySelector("#btn-sub");
const btn4        = document.querySelector("#btn-4");
const btn5        = document.querySelector("#btn-5");
const btn6        = document.querySelector("#btn-6");
const btnMult     = document.querySelector("#btn-mult");
const btn1        = document.querySelector("#btn-1");
const btn2        = document.querySelector("#btn-2");
const btn3        = document.querySelector("#btn-3");
const btnDiv      = document.querySelector("#btn-div");
const btn0        = document.querySelector("#btn-0");
const btnDot      = document.querySelector("#btn-dot");
const btnEqual    = document.querySelector("#btn-equal");
const inputNumber = document.querySelector(".inp-num");

// المتغيرات المستخدمة فى المشروع
let isAdd = false;
let isSubtract = false;
let isMulit = false;
let isDiv = false;
let allOperation = [];
let total = 0.0;

// الدوال المستخدمة فى المشروع
/*eval();*/
function resulrCalculate(){
        // تحديد اذا كان اخر قيمة لانساوى اى علامة رياضية او مربع الادخالى فارغ 
        if((allOperation[allOperation.length-1] == "+" || allOperation[allOperation.length-1] == "-" || allOperation[allOperation.length-1] == "*" || allOperation[allOperation.length-1] == "/") && inputNumber.value != "")
        allOperation.push(inputNumber.value);
    else
        allOperation.pop();
    //
    if(allOperation[0]){
        total= parseFloat(allOperation[0]);
    }else{
        console.log(allOperation.shift());
        console.log(allOperation.shift());
        total= parseFloat(allOperation[0]);
    }
    for(let i= 1; i < allOperation.length; i++ ){
        switch(allOperation[i]){
            case "+": isAdd = true  ;break;
            case "-": isSubtract = true  ;break;
            case "*": isMulit = true  ;break;
            case "/": isDiv = true  ;break;
            default:
                if(isAdd){
                    total += parseFloat(allOperation[i]);
                    isAdd = false;
                }
                else if(isSubtract){
                    total -= parseFloat(allOperation[i]);
                    isSubtract = false;
                }
                else if(isMulit){
                    total *= parseFloat(allOperation[i]);
                    isMulit = false;
                }
                else if(isDiv){
                    total /= parseFloat(allOperation[i]);
                    isDiv = false;
                }
        }
    }
    if(!isNaN(total))
        inputNumber.value = total;
    total = 0.0;
    allOperation = [];
//allOperation = [inputNumber.value,allOperation[allOperation.length-2]];
}
//  ======>
function addOperation(oper){
    allOperation.push(inputNumber.value);
    allOperation.push(oper); inputNumber.value =""; 
}
//  ======> 
function toNegative(){
    if(inputNumber.value.search("-") == -1 && inputNumber.value.search("-",) != 0)
        inputNumber.value = "-" + inputNumber.value;
    else 
        inputNumber.value = inputNumber.value.slice(1,inputNumber.value.length);
}
//  ======>
function backSpase(){
    inputNumber.value =  inputNumber.value.slice(0,inputNumber.value.length-1);
}
//  ======>
function addDot(){
    if(inputNumber.value.lastIndexOf(".") == -1)
        inputNumber.value = inputNumber.value + ".";
}
//  ======>
function isCheckedOperation(){
    isAdd = false;
    isSubtract = false;
    isMulit = false;
    isDiv = false; 
}
//  ======>
function clear(){
    isCheckedOperation(); 
    inputNumber.value = "" ;
    total = 0.0;
    allOperation = []; 
}
//  ======>
function classListAdd(keyinkeybord,[...classname]){
    keyinkeybord= keyinkeybord.classList.add(...classname);
    return keyinkeybord;
}
//  ======>
function classListRemove(keyinkeybord,[...classname]){
    keyinkeybord= keyinkeybord.classList.remove(...classname);
    return keyinkeybord;
}
//  ======>
function getNumber(num){
    inputNumber.value += num;
}
//  ======>

function withKeyDown(event){
    switch(event.key){
        case "Escape" :   classListAdd(btnClear,["keypress"]);     clear();break
        case "_" :        classListAdd(btnNavigate,["keypress"]);  toNegative();break;
        case "Backspace" :classListAdd(btnBkSpace,["keypress"]);   backSpase();break;
        case "+" :        classListAdd(btnAdd,["keypress"]);       addOperation("+");break;
        case "-" :        classListAdd(btnSub,["keypress"]);       addOperation("-");break;
        case "*" :        classListAdd(btnMult,["keypress"]);      addOperation("*");break;
        case "/" :        classListAdd(btnDiv,["keypress"]);       addOperation("/");break;        
        case "7" :        classListAdd(btn7,["keypress"]);         getNumber("7")   ;break;
        case "8" :        classListAdd(btn8,["keypress"]);         getNumber("8")   ;break;
        case "9" :        classListAdd(btn9,["keypress"]);         getNumber("9")   ;break;
        case "4" :        classListAdd(btn4,["keypress"]);         getNumber("4")  ;break;
        case "5" :        classListAdd(btn5,["keypress"]);         getNumber("5")   ;break;
        case "6" :        classListAdd(btn6,["keypress"]);         getNumber("6")   ;break;
        case "1" :        classListAdd(btn1,["keypress"]);         getNumber("1")  ;break;
        case "2" :        classListAdd(btn2,["keypress"]);         getNumber("2")  ;break;
        case "3" :        classListAdd(btn3,["keypress"]);         getNumber("3")   ;break;
        case "0" :        classListAdd(btn0,["keypress"]);         getNumber("0")  ;break;
        case "." :        classListAdd(btnDot,["keypress"]);       addDot();break;
        case "=" :          
        case "Enter" :    classListAdd(btnEqual,["keypress"]); resulrCalculate() ;break;
        default: console.log(event.key);break;
    }
}

function withKeyUp(event){
    switch(event.key){
        case "Escape" :  classListRemove(btnClear,["keypress"])       ;break;
        case "_" :         classListRemove(  btnNavigate,["keypress"]);break;
        case "Backspace":  classListRemove(btnBkSpace,["keypress"]);  ;break;
        case "+" :         classListRemove(btnAdd,["keypress"])       ;break;
        case "7" :         classListRemove(btn7,["keypress"])         ;break;
        case "8" :         classListRemove(btn8,["keypress"])         ;break;
        case "9" :         classListRemove(btn9,["keypress"])         ;break;
        case "-" :         classListRemove(btnSub,["keypress"])       ;break;
        case "4" :         classListRemove(btn4,["keypress"])         ;break;
        case "5" :         classListRemove(btn5,["keypress"])         ;break;
        case "6" :         classListRemove(btn6,["keypress"])         ;break;
        case "*" :         classListRemove(btnMult,["keypress"])      ;break;
        case "1" :         classListRemove(btn1,["keypress"])         ;break;
        case "2" :         classListRemove(btn2,["keypress"])         ;break;
        case "3" :         classListRemove(btn3,["keypress"])         ;break;
        case "/" :         classListRemove(btnDiv,["keypress"])       ;break;
        case "0" :         classListRemove(btn0,["keypress"])         ;break;
        case "." :         classListRemove(btnDot,["keypress"])       ;break;
        case "=" :   
        case "Enter" :     classListRemove(btnEqual,["keypress"])     ;break;
        default: break;
    }
}
/* تشغيل جدث ضغط المفاتيح  */ 
document.addEventListener("keydown",withKeyDown);
document.addEventListener("keyup",withKeyUp);
// ==============================================================>

function getOperator(ope){
    
    switch(ope){
        case "+"    : addOperation("+");break;
        case "-"    : addOperation("-");break;
        case "*"    : addOperation("*");break;
        case "/"    : addOperation("/");break;
    
        case "b.s"  : backSpase();break;
        case "nav"  : toNegative();break;
        case "c"    : clear() ;break;
        case "."    : addDot();break;
        case "="    : resulrCalculate() ;break;
        default     : ;break;   
    }
}
        /*
        case "+": firstNumber = parseFloat(inputNumber.value) ; inputNumber.value ="" ;operation = "+";break;
        case "-": firstNumber = parseFloat(inputNumber.value) ; inputNumber.value ="" ;operation = "-";break;
        case "*": firstNumber = parseFloat(inputNumber.value) ; inputNumber.value ="" ;operation = "*";break;
        case "/": firstNumber = parseFloat(inputNumber.value) ; inputNumber.value ="" ;operation = "/";break;
        */

                /*
            switch(operation){
            case "+": inputNumber.value =  parseFloat(firstNumber) + parseFloat(inputNumber.value);break;
            case "-": inputNumber.value =  parseFloat(firstNumber) - parseFloat(inputNumber.value);break;
            case "*": inputNumber.value =  parseFloat(firstNumber) * parseFloat(inputNumber.value);break;
            case "/": inputNumber.value =  parseFloat(firstNumber) / parseFloat(inputNumber.value);break;
        };*/
        /*firstNumber = 0; operation = ""; break;*/



        /*
            btnEqual .classList.add("keypress")     ; ; switch(operation){
            case "+": inputNumber.value =  parseFloat(firstNumber) + parseFloat(inputNumber.value);break;
            case "-": inputNumber.value =  parseFloat(firstNumber) - parseFloat(inputNumber.value);break;
            case "*": inputNumber.value =  parseFloat(firstNumber) * parseFloat(inputNumber.value);break;
            case "/": inputNumber.value =  parseFloat(firstNumber) / parseFloat(inputNumber.value);break;
        };  
        firstNumber = 0;
        operation = "";
        ;break;
        */

        /*
        
             // تحديد اذا كان اخر قيمة لانساوى اى علامة رياضية او مربع الادخالى فارغ 
            if((allOperation[allOperation.length-1] == "+" || allOperation[allOperation.length-1] == "-" || allOperation[allOperation.length-1] == "*" || allOperation[allOperation.length-1] == "/") && inputNumber.value != "")
                allOperation.push(inputNumber.value);
            else
                allOperation.pop();
            //
            if(allOperation[0]){
                total= parseFloat(allOperation[0]);
            }else{
                console.log(allOperation.shift());
                console.log(allOperation.shift());
                total= parseFloat(allOperation[0]);
            }
            for(let i= 1; i < allOperation.length; i++ ){
                switch(allOperation[i]){
                    case "+": isAdd = true  ;break;
                    case "-": isSubtract = true  ;break;
                    case "*": isMulit = true  ;break;
                    case "/": isDiv = true  ;break;
                    default:
                        if(isAdd){
                            total += parseFloat(allOperation[i]);
                            isAdd = false;
                        }
                        else if(isSubtract){
                            total -= parseFloat(allOperation[i]);
                            isSubtract = false;
                        }
                        else if(isMulit){
                            total *= parseFloat(allOperation[i]);
                            isMulit = false;
                        }
                        else if(isDiv){
                            total /= parseFloat(allOperation[i]);
                            isDiv = false;
                        }
                }
            }
            inputNumber.value = total;
            allOperation = [inputNumber.value,allOperation[allOperation.length-2]];
    }
        
        */