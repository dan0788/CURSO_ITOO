//var signo = "";
//var firstValue="";
//var secondValue="";
//var boolSigno=false;
var signo = null;
var value = null;
var boolSigno = false;
function getContent(event) {
    let value = event.path[0].innerHTML;
    filtro(value);
    return value;
}

const filtro = (value) => {
    if(value=== "AC") {
        clear();
        document.getElementsByTagName("input")[0].value = "0";
        $("body > div").children("div").children("button").prop("disabled", false);
        return;
    }else if(value>="0"&&value<="9"){
        number(value);
    }else if(value==="."){
        number(value);
//        operation(value);
    }else{
        operation(value);
    }
//    (value>="0"&&value<="9")||value==="."?number(value):operation(value);
};
const number = (value) => {
    let valueTag = document.getElementsByTagName("input")[0].value;
    if ((value >= "1" && value <= "9") && valueTag === "0" && valueTag.length < 10) {
        document.getElementsByTagName("input")[0].value = value;
    } else if (((value >= "0" && value <= "9") && valueTag !== "0" && valueTag.length < 10) || (value === "." && !valueTag.includes(".") && valueTag.length < 10)) {
        if(boolSigno===false){
            document.getElementsByTagName("input")[0].value += value;
        }else if(boolSigno===true){
            document.getElementsByTagName("input")[0].value = value;boolSigno=false;
        }
    }
};

function operation(signo) {
    let value = document.getElementsByTagName("input")[0].value;
    let result=null;
    //------------------------
    signo==="+/-"?result=calculate(this.value,signo,value):result=calculate(this.value,this.signo,value);
    
    //--------------------------
    this.signo=signo;
    this.value=document.getElementsByTagName("input")[0].value;
//    if (value === "+/-" || value === "%") {
//        firstValue = document.getElementsByTagName("input")[0].value;
//        calculate(value);
//        boolSigno = false;
//    } else if (signo === ""&&boolSigno===false) {
//        firstValue = document.getElementsByTagName("input")[0].value;
//        boolSigno = true;
//        signo = value;
//    } else if(signo !== ""&&boolSigno===false){
//        secondValue = document.getElementsByTagName("input")[0].value;console.log("entra");
//        calculate(signo);
//        boolSigno = true;
//        signo = value;
//    }else{
//        signo=value;
//    }
}

function calculate(firstValue, signo, secondValue) {
    if (signo === "+/-") {
        firstValue = parseFloat(firstValue);
        secondValue = parseFloat(secondValue);
        console.log(firstValue + signo + secondValue);
        let result = null;
        result = operators(firstValue, signo, secondValue);
        document.getElementsByTagName("input")[0].value = result;
        console.log(result);
        return isNaN(result) ? result : null;
    } else if (this.value === null || this.signo === null) {
        return;
    }
    
    
    
//    firstValue=parseFloat(firstValue);
//    secondValue=parseFloat(secondValue);
//    console.log(firstValue);console.log(secondValue);
//    let result;
//    switch (value) {
//        case "÷":result=firstValue/secondValue;
//            break;
//        case "*":result=firstValue*secondValue;
//            break;
//        case "-":result=firstValue-secondValue;
//            break;
//        case "+":result=firstValue+secondValue;
//            break;
//        case "=":result=firstValue;
//            break;
//        case "+/-":result=firstValue*(-1);
//            break;
//        case "%":result=firstValue*100;
//            break;
//    }
//    result = validateDecimals(result);
//    validateDivisionByZero(result);
//    document.getElementsByTagName("input")[0].value = result;
//    firstValue=result;
}

function operators(firstValue,signo,secondValue){
    let result=null;
    signo==="+"?result=firstValue+secondValue:null;
    signo==="-"?result=firstValue-secondValue:null;
    signo==="*"?result=firstValue*secondValue:null;
    signo==="÷"?result=firstValue/secondValue:null;
    signo==="="?result=firstValue:null;
    signo==="+/-"?result=document.getElementsByTagName("input")[0].value*(-1):null;
    signo==="%"?result=document.getElementsByTagName("input")[0].value*100:null;
    if(signo === "+/-" || signo === "%") {
        boolSigno = false;this.signo=null;
    } else {
        boolSigno = true;
    }
    return result;
}
const clear = () => {
    signo = null;
    value = null;
    boolSigno=false;
};
const validateDecimals=value=>{
    value=value.toString();
    value=parseFloat(value);
    return value;
};
const validateDivisionByZero=(value)=>{
    value===Infinity?$("body > div").children("div").children("button").prop("disabled",true):null;
    $("body > div").children("div").first().children("button").first().prop("disabled",false);
};