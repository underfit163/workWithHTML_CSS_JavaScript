var but = document.inputData.calcName;
but.addEventListener("click", calcHandler);

function calcHandler(e) {
    if ((document.getElementById('firstOp').value === "") || (document.getElementById('secondOp').value === "")) {
        alert('Надо заполнить все поля операндов!');
        e.preventDefault();
    } else {
        var op1 = document.getElementById('firstOp').value;
        var op2 = document.getElementById('secondOp').value;
        var reg = new RegExp('[+-]?\\d+(\\.\\d+)?');
        var result1 = reg.test(op1);
        var result2 = reg.test(op2);
        if (parseFloat(op1) && parseFloat(op2) && result1 && result2) {
            if (op2 === 0) {
                alert('Делить на ноль нельзя!');
                e.preventDefault();
            }
        } else {
            alert("Вводите только числа!");
            e.preventDefault();
        }
    }
}

function getСalc() {
    var p_url = location.search.substring(1);
    var parametr = p_url.split("&"); // получим массив данных без знака &
    var values = new Array();
    var t = 0;
    for (i in parametr) {
        var j = parametr[i].split("=");
        values[t++] = j[1];
    }
    var op1 = values[0];
    var op2 = values[1];
    var operation = decodeURIComponent(values[2]);
    var result;
    if (operation == "+") {
        result = parseFloat(op1) + parseFloat(op2);
    } else if (operation == "-") {
        result = op1 - op2;
    } else if (operation == "*") {
        result = op1 * op2;
    } else if (operation == "/") {
        result = op1 / op2;
    } else {
        alert('Делить на ноль нельзя!');
        e.preventDefault();
    }
    document.getElementById("firstOp").innerHTML = op1;
    document.getElementById("secondOp").innerHTML = op2;
    document.getElementById('operation').innerHTML = operation;
    document.getElementById("result").innerHTML = result;
}


