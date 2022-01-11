const totalBillAmount = document.querySelector("#total-bill-amount");
const totalCashGiven = document.querySelector("#total-cash-given");
const checkButton = document.querySelector("#check");
const errorDisplay = document.querySelector("#error-display");
const errorMessage1 = "Total Bill Amount must be greater than 0.";
const errorMessage2 = "No change needs to be returned.";
const tables = document.querySelectorAll(".Tables-output")
const notes = ["2000", "500","200","100","50","20", "10", "5", "1"];

checkButton.addEventListener("click", function verifyTotalBillAndCashAmount() {
    var returningAmount = (totalCashGiven.value - totalBillAmount.value);
    errorDisplay.style.display = "none";
    let currIndex = 0;

    (totalBillAmount.value > 0) ? (+totalCashGiven.value >= +totalBillAmount.value) ?
        notes.map((note,currIndex)=>{
            var noOfNotes = (Math.trunc(returningAmount / note))
            tables[currIndex].innerText= noOfNotes;
            returningAmount = (returningAmount) - (noOfNotes * note)
            currIndex++;
        })
        :showMessage(errorMessage2):showMessage(errorMessage1);
});

const showMessage = message => {
    errorDisplay.style.display = "block";
    errorDisplay.innerText = message;
}