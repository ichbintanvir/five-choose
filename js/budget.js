function inputBox(id) {
    const stringValue = id.value;
    const numValue = parseInt(stringValue);
    return numValue;
}
function innerValue(id) {
    const stringValue = id.innerText;
    const numValue = parseInt(stringValue);
    return numValue;
}

document.getElementById('calculate').addEventListener('click', function () {
    const per_player = document.getElementById('per-player');
    const perPlayer = inputBox(per_player);
    const ol = document.getElementById('order-list');
    const liCount = ol.getElementsByTagName('li').length;
    const mul = liCount * perPlayer;
    const playerTotalAmount = document.getElementById('player-total-amount');
    playerTotalAmount.innerText = mul;
    console.log(liCount);


})

document.getElementById('calculate-total').addEventListener('click', function () {
    const playerTotalAmount = document.getElementById('player-total-amount');
    const managerExpense = document.getElementById('manager-expense');
    const coachExpense = document.getElementById('coach-expense');
    const total = document.getElementById('all');
    const totalAmount = document.getElementById('all-amount');
    const playerTotal = innerValue(playerTotalAmount);
    const managerTake = inputBox(managerExpense);
    const coachTake = inputBox(coachExpense);
    const totalSum = playerTotal + managerTake + coachTake;
    totalAmount.style.color = '#FF5E19';
    total.innerText = totalSum;
})