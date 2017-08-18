var num = 0,
    result = 0,
    numshow = "0";
var operate = 0; //判断输入状态的标志 
var calcul = 0; //判断计算状态的标志 
var quit = 0; //防止重复按键的标志 
var flag = 0; //判断是否已经读取第一个数字
function command(num) {
    var str = String(document.calculator.numScreen.value); //获得当前显示数据 
    if (str == "0" || operate != 0) //如果当前值是0或者状态不是0，则返回空值
        str = "";
    str = str + String(num); //给当前值追加字符 
    document.calculator.numScreen.value = str; //刷新显示 
    operate = 0; //重置输入状态 
    quit = 0; //重置防止重复按键的标志 
}
//事件绑定
var liList = document.getElementsByTagName("li");
for (var i = 0; i < liList.length; i++) {
    liList[i].onclick = function() {
        if (this.innerHTML == "1")
            command(1);
        if (this.innerHTML == "2")
            command(2);
        if (this.innerHTML == "3")
            command(3);
        if (this.innerHTML == "4")
            command(4);
        if (this.innerHTML == "5")
            command(5);
        if (this.innerHTML == "6")
            command(6);
        if (this.innerHTML == "7")
            command(7);
        if (this.innerHTML == "8")
            command(8);
        if (this.innerHTML == "9")
            command(9);
        if (this.innerHTML == "0")
            command(0);
        if (this.innerHTML == "+")
            plus();
        if (this.innerHTML == "=")
            equal();
        if (this.innerHTML == "-")
            minus();
        if (this.innerHTML == "×")
            times();
        if (this.innerHTML == "÷")
            divide();
        if (this.innerHTML == "←")
            del();
        if (this.innerHTML == "C")
            clearscreen();
        if (this.innerHTML == "00")
            dzero();
        if (this.innerHTML == ".")
            dot();
        if (this.innerHTML == "%")
            persent();
        if (this.innerHTML == "sin")
            sin();
        if (this.innerHTML == "cos")
            cos();
        if (this.innerHTML == "tan")
            tan();
        if (this.innerHTML == "cot")
            cot();
        if (this.innerHTML == "制作")
            alert("缪佳圣");
    }
}

function dzero() {
    var str = String(document.calculator.numScreen.value);
    if (str != "0" && operate == 0) //如果当前值不是"0"并且状态为0，则返回str+"00",否则返回"0"
        str = str + "00";
    else
        str = "0";
    document.calculator.numScreen.value = str;
    operate = 0;
}

function dot() {
    var str = String(document.calculator.numScreen.value);
    str = (str != "0") ? ((operate == 0) ? str : "0") : "0"; //如果当前值不是"0"，且状态为0，则返回当前值，否则返回"0"; 
    for (i = 0; i <= str.length; i++) { //判断是否已经有一个点号 
        if (str.substr(i, 1) == ".") return false; //如果有则不再插入 
    }
    str = str + ".";
    document.calculator.numScreen.value = str;
    operate = 0;
}

function del() { //退格 
    var str = String(document.calculator.numScreen.value);
    str = (str != "0") ? str : "";
    str = str.substr(0, str.length - 1);
    str = (str != "") ? str : "0";
    document.calculator.numScreen.value = str;
}

function clearscreen() { //清除数据 
    num = 0;
    result = 0;
    numshow = "0";
    flag = 0;
    document.calculator.numScreen.value = "0";
}

function plus() { //加法 
    calculate(); //调用计算函数 
    operate = 1; //更改输入状态 
    calcul = 1; //更改计算状态为加 
}

function minus() { //减法 
    calculate();
    operate = 1;
    calcul = 2;
}

function times() { //乘法 
    calculate();
    operate = 1;
    calcul = 3;
}

function divide() { //除法 
    calculate();
    operate = 1;
    calcul = 4;
}

function persent() { //求余 
    calculate();
    operate = 1;
    calcul = 5;
}

function sin() { //sin函数
    calculate();
    operate = 1;
    calcul = 6;
}

function cos() { //cos函数
    calculate();
    operate = 1;
    calcul = 7;
}

function tan() { //tan函数
    calculate();
    operate = 1;
    calcul = 8;
}

function cot() { //cot函数
    calculate();
    operate = 1;
    calcul = 9;
}

function equal() {
    calculate(); //等于 
    operate = 1;
    num = 0;
    result = 0;
    numshow = "0";
    flag = 0;
}


function calculate() {
    numshow = Number(document.calculator.numScreen.value);
    if (flag != 0 && quit != 1) { //判断前一个运算数是否为零以及防重复按键的状态 
        switch (calcul) { //判断要输入状态 
            case 1:
                result = parseFloat((num + numshow).toFixed(8));
                break; //计算"+" 
            case 2:
                result = parseFloat((num - numshow).toFixed(8));
                break; //计算"-" 
            case 3:
                result = parseFloat((num * numshow).toFixed(8));
                break;
            case 4:
                if (numshow != 0) { result = parseFloat((num / numshow).toFixed(8)); } else { document.getElementById("show").innerHTML = "除数不能为零！";
                    result = "NAN" }
                break;
            case 5:
                result = num % numshow;
                break;
            case 6:
                result = Math.sin(numshow * Math.PI / 180).toFixed(2);
                break;
            case 7:
                result = Math.cos(numshow * Math.PI / 180).toFixed(2);
                break;
            case 8:
                result = Math.tan(numshow * Math.PI / 180).toFixed(2);
                break;
            case 9:
                result = 1 / (Math.tan(numshow * Math.PI / 180).toFixed(2));
                break;
        }
        quit = 1; //避免重复按键 
    } else {
        result = numshow;
        flag = 1; //已经读取第一个数字
    }
    numshow = String(result);
    document.calculator.numScreen.value = numshow;
    num = result; //存储当前值 
}
