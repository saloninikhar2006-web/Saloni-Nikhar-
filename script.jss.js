document.getElementById("predictionForm").addEventListener("submit", function(e){

e.preventDefault();

let age = document.getElementById("age").value;
let bmi = document.getElementById("bmi").value;
let glucose = document.getElementById("glucose").value;
let hba1c = document.getElementById("hba1c").value;

let message="";

if(glucose > 180 || hba1c > 6.5 || bmi > 30){
message="High Risk of Diabetes";
}
else{
message="Low Risk of Diabetes";
}

document.getElementById("result").innerHTML=message;

});