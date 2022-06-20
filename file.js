const buttonMoins=document.querySelectorAll('.moins');
const buttonplus=document.querySelectorAll('.plus');
const qtOfItem=document.querySelectorAll('.qt');
const totals=document.querySelector('#totalsum');
const priceofItem=document.querySelectorAll('.price');
const reseat=document.querySelectorAll('.delete');

const bigdivcontent=document.querySelectorAll('.card');
console.log(bigdivcontent);
for(let i=0;i<buttonMoins.length;i++){
    buttonMoins[i].addEventListener('click',function(){
        if(qtOfItem[i].innerHTML>0){
            qtOfItem[i].innerHTML--;
      totals.textContent=parseInt(totals.textContent)+parseInt(priceofItem[i].textContent);
        }
    }
)};
for(let i=0;i<buttonplus.length;i++){
    buttonplus[i].addEventListener('click',function(){
     qtOfItem[i].innerHTML++;
    totals.textContent=parseInt(totals.textContent)+parseInt(priceofItem[i].textContent);
 }
)};

 for(let i=0;i<reseat.length;i++){
    reseat[i].addEventListener('click',function(){
                 bigdivcontent[i].remove();
        totals.innerHTML=parseInt(totals.innerHTML)-parseInt(priceofItem[i].innerHTML)*parseInt(qtOfItem[i].innerHTML);
     });
 }
 