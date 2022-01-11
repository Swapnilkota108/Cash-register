const billAmount = document.querySelector('#bill-input');
const checkButton = document.querySelector('.check-btn')
const cashGiven = document.querySelector('#cash-input')
const message = document.querySelector('#error-message');
const noOfNotes = document.querySelectorAll('.noOfNotes');
const table = document.querySelector('.change');
const cashLabel = document.querySelector('#cashLabel');

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];
table.style.display = 'none';
cashLabel.style.display = 'none';
cashGiven.style.display = 'none';


const validateBillAmount = () => {
    hideMessage();
    cashLabel.style.display = 'block';
    cashGiven.style.display = 'block';

    let cashInput = Number(cashGiven.value);
    let billInput = Number(billAmount.value);
    console.log(cashInput, billInput);
    if (billInput > 0) {
        if (cashInput >= billInput) {
            const amountToBeReturned = cashInput - billInput;
            calculateChange(amountToBeReturned);
            table.style.display = 'block';
        }
        else {
            showMessage('Do you wanna wash plates?');
            table.style.display = 'none';

        }
    } else {
        showMessage('The Bill Amount should be atleast greater than 0')
    }


}


checkButton.addEventListener('click', validateBillAmount);

const calculateChange = amountToBeReturned => {
    for (let i = 0; i < availableNotes.length; i++) {
        const numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
        amountToBeReturned %= availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}

const showMessage = msg => {
    message.style.display = 'block';
    message.innerText = msg;
}

const hideMessage = () => message.style.display = 'none';
