function addition() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var result = num1 + num2;
    document.getElementById("result").innerHTML = result;
}

function subtraction() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var result = num1 - num2;
    document.getElementById("result").innerHTML= result;
}

function multiplication() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var result = num1 * num2;
    document.getElementById("result").innerHTML= result;
}

function division() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var result = num1 / num2;
    document.getElementById("result").innerHTML = result;
}
function solver () {
    var num3 = parseInt(document.getElementById("num3").value);
    var num4 = parseInt(document.getElementById("num4").value);
    var num5 = parseInt(document.getElementById("num5").value);
    var D = num4*num4 - 4*num3*num5;
    if (D > 0) {
    var root1 = (-num4 + Math.sqrt(D)) / (2 * num3);
    var root2 = (-num4 - Math.sqrt(D)) / (2 * num3);
    document.getElementById("result2").innerHTML = "The first root:" + " " + root1 + "<br>"+ "The second root:" + " " + root2;
    }
   else if (D==0) {
    var root3 = -num4 / (2*num3);
     document.getElementById("result2").innerHTML = "The root is:" + " " + root3;
   }
   else 
   document.getElementById("result2").innerHTML = "There are no real roots :(";
}
