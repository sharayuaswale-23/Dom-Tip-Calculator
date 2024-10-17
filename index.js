let billamtEl = document.getElementById("billamt");
let percenttipEl = document.getElementById("percenttip");
let tipamtEl = document.getElementById("tipamt");
let total = document.getElementById("total");
let errormsgEl = document.getElementById("errormsg");


function calculate(){
   if(billamtEl.value === "" || percenttipEl.value === ""){
      errormsgEl.textContent = "Please enter a valid input";
      tipamtEl.value = "";
      total.value = "";
   }
   else{
    let billAmount = parseInt(billamtEl.value);
    let percenttipEl = parseInt(percenttip.value);

    let tip = (percenttipEl*billAmount) / 100;

    let totalamount = tip+billAmount;

    tipamtEl.value = tip;
    total.value = totalamount;
    errormsgEl.textContent = "";
   }
}