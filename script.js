const billAmount = document.querySelector('#bill-input');
const checkButton = document.querySelector('.check-btn')
const cashGiven = document.querySelector('#cash-input')
const message = document.querySelector('#error-message');
const noOfNotes = document.querySelectorAll('.noOfNotes');
const table = document.querySelector('.change');

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];
table.style.display = 'none';

checkButton.addEventListener('click',function validateBillandCashAmount(){
hideMessage();    
    if (billAmount.value > 0){
        if(billAmount.value<=cashGiven.value){
     const amountToBeReturned = cashGiven.value - billAmount.value;
     calculateChange(amountToBeReturned);
     table.style.display = 'block';
         }else {
         showMessage('Do you want to wash plates?');
         }
    } else {
       showMessage('Invalid Bill Amount');
    }
})



function calculateChange(amountToBeReturned){
   for(let i=0 ; i< availableNotes.length ; i++){
       const numberOfNotes = Math.trunc(amountToBeReturned/availableNotes[i]);
       amountToBeReturned %= availableNotes[i];
       noOfNotes[i].innerText = numberOfNotes;
   }

}

function showMessage(msg){
message.style.display = 'block';
message.innerText = msg;
}

function hideMessage(){
message.style.display = 'none';
}
