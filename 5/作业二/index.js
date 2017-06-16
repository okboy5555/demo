function calc() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    var operator = document.getElementById("op").value;
    var sum;
    if (num1=="" || num2=="") {
    	alert("输入为空");//判断是否为空
    }
    if (isNaN(num1) || isNaN(num2))
        alert("不是数字类型!");//判断是否为字母
    else
    if (num2 == 0 && operator == "除") {
    	alert("除数不能为0");
        document.getElementById("result").innerText = "NAN";//判断除数
    } else {
        num2 = Number(num2);
        num1 = Number(num1);
        sum = comput(num1, num2, operator);
        //sum = parseFloat(sum.toFixed(2));
        
        document.getElementById("result").innerText = sum;
    }
}

function comput(n1, n2, oper) {
    switch (oper) {
        case "加":
            return n1+n2;
        case "减":
            return n1 - n2;
        case "乘":
            return n1 * n2 ;
        case "除":
            return n1/n2;
        default:
            return "未知"
    }

}
