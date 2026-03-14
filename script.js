function convertTemperature(){

let temp = document.getElementById("temperature").value;
let unit = document.getElementById("unit").value;
let output = document.getElementById("output");

if(temp === "" || isNaN(temp)){
output.innerHTML = "Please enter a valid number.";
return;
}

temp = Number(temp);
let result;

if(unit === "celsius"){
result = (temp * 9/5) + 32;
output.innerHTML = temp + " °C = " + result.toFixed(2) + " °F";
}

else if(unit === "fahrenheit"){
result = (temp - 32) * 5/9;
output.innerHTML = temp + " °F = " + result.toFixed(2) + " °C";
}

else if(unit === "kelvin"){
result = temp - 273.15;
output.innerHTML = temp + " K = " + result.toFixed(2) + " °C";
}

else{
output.innerHTML = "Please select a unit.";
}

}
function clearFields(){
document.getElementById("temperature").value="";
document.getElementById("unit").value="";
document.getElementById("output").innerHTML="";
}