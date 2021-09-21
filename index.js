const totalBillAmount = document.querySelector("#total-bill-amount");
const totalCashGiven = document.querySelector("#total-cash-given");
const checkButton = document.querySelector("#check");
const errorDisplay = document.querySelector("#error-display");
const errorMessage1 = "Total Bill Amount must be greater than 0.";
const errorMessage2 = "No change needs to be returned.";

const tables = [document.querySelector("#table-1"), document.querySelector("#table-2"), document.querySelector("#table-3"), document.querySelector("#table-4"), document.querySelector("#table-5"), document.querySelector("#table-6"), document.querySelector("#table-7"), document.querySelector("#table-8"), document.querySelector("#table-9")]


const notes = ["2000", "500", "100", "20", "10", "5", "1"];

checkButton.addEventListener("click", function verifyTotalBillAndCashAmount() {
    var returningAmount = (totalCashGiven.value - totalBillAmount.value);
    errorDisplay.style.display = "none";
    if (totalBillAmount.value > 0) {
        if (+totalCashGiven.value >= +totalBillAmount.value) {
            for (i = 0; i < 7; i++) {

                var noOfNotes = (Math.trunc(returningAmount / notes[i]));
                tables[i].innerText = noOfNotes;
                returningAmount = (returningAmount) - (noOfNotes * notes[i]);
            }

        } else {
            showMessage(errorMessage2)
        }
    } else {
        showMessage(errorMessage1)
    }
});

function showMessage(message) {
    errorDisplay.style.display = "block";
    errorDisplay.innerText = message;
}