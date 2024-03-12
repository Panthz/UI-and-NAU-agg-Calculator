//shows only the subject element when page loads
function wup(){
  document.getElementById("showWAEC").style.display = "none";
    document.getElementById("inputbtn").style.display = "none";
}
//shows unique elements for each school property when selected
function chooseSchool(){
  let school = document.getElementById("school").value;
  switch (school) {
  case "titleOfSchool" :alert("ENTER A SCHOOL");
  document.getElementById("showWAEC").style.display = "none";
  document.getElementById("inputbtn").style.display = "none";
  break;

  case "NAU":document.getElementById("showWAEC").style.display = "block";
        document.getElementById("inputbtn").style.display = "block";

  document.getElementById("pme").style.display = "none" ;
;
    break;
  case "UI":document.getElementById("inputbtn").style.display = "block"; 
    document.getElementById("showWAEC").style.display = "none";
  document.getElementById("pme").style.display = "block" ;

break;
  } 
}
var utme = document.getElementById("utme").value;
  var pUtme =document.getElementById("pUtme").value;
  var p =  document.getElementById("demo");


//calculations for NNAMDI AZIKIWE UNIVERSITY

function nauAgg(){
  utme = document.getElementById("utme").value;
   pUtme =document.getElementById("pUtme").value;
   p =  document.getElementById("demo");
 let firstSub = parseInt(document.getElementById("firstSub").value);
  let  secondSub = parseInt(document.getElementById("secondSub").value);
  let  thirdSub = parseInt(document.getElementById("thirdSub").value) ;
  let lastSub =  parseInt(document.getElementById("lastSub").value);
  let result = firstSub + secondSub + thirdSub + lastSub;
p =  document.getElementById("demo");

try {
      if(utme == "") throw "Input is empty";
      if (isNaN(utme)) throw "please input a number";
    if (utme >0 && utme<=400) throw (utme*0.7)+ (result+10)*0.3 ;
    if (utme >400) throw " scores should not be greater than 400"
    if (utme >400) throw "utme score should not be greater than 400"

}
catch(e) {

    // statements
p.innerHTML = e;
  }
} 

 //university of Ibadan formula calculator
  function uiAgg(){
   utme = document.getElementById("utme").value;
   pUtme =document.getElementById("pUtme").value;
   p =  document.getElementById("demo");

  try {
    // statements
    if(utme == "" && pUtme.trim() == "") throw "Input is empty";
    if (isNaN(utme) && isNaN(pUtme)) throw "please input a number";
    if (utme >0 && utme<=400 && pUtme >0 && pUtme <=100 ) throw (utme/8)+ (pUtme/2);
    if (utme >400 && pUtme >100) throw " scores should not be greater than 400"
    if (utme >400) throw "utme score should not be greater than 400"
    if (pUtme >100) throw "post utme score should not be greater than 100"


  } 
  catch(e) {

    // statements
p.innerHTML = e;
  }
} 

