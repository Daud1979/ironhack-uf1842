// ¿En tu páis de origen es normal dejar propina?
//En Bolivia no.
const calculate = document.getElementById('calculate');
const bill_amount=document.getElementById('bill-amount');
const percentage_tip =document.getElementById('percentage-tip');
const tip_amount = document.getElementById('tip-amount');
const total = document.getElementById('total');
calculate.addEventListener('click', function(){
   if (bill_amount.value!='' && bill_amount.value>0 && percentage_tip.value!='' && percentage_tip.value>0)
   {
        let per =  (bill_amount.value*percentage_tip.value)/100;
        let suma = Number(bill_amount.value) + per;
        tip_amount.value =per.toFixed(2);
        total.value=suma.toFixed(2); 
   }
   else
   {
    alert('DATOS NO VALIDOS');
   }
});
