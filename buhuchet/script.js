document.getElementById('addTransactionButton').addEventListener('click', () => {
    let amount = document.getElementById('amountInput').value;
    let category = document.getElementById('categorySelect').value;
    if (amount && category) {
        let transaction = { amount, category };
        document.getElementById('amountInput').value = '';
        saveTransaction(transaction);
        addTransactionToPage(transaction);
    }
})
function saveTransaction(transaction) {
    let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    transactions.push(transaction);
    localStorage.setItem('transactions', JSON.stringify(transactions));

}
function addTransactionToPage(transaction) {
    let transactionsContainer = document.getElementById('transactionContainer');
    let transactionElement = document.createElement('div');
    transactionElement.innerText = `Amount: ${transaction.amount} category: ${transaction.category}`
    transactionsContainer.append(transactionElement);
}