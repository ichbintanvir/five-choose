document.getElementById('card-section').addEventListener('click', function (event) {
    const cardParent = event.target.parentNode;
    const playerNameSection = cardParent.querySelector('h2');
    const playerName = playerNameSection.innerText;
    const ol = document.getElementById('order-list');
    const li = document.createElement('li');
    const liCount = ol.getElementsByTagName('li').length;
    if (liCount >= 5) {
        alert('You select more than 5 player');
    }
    else {
        li.innerText = playerName;
        ol.appendChild(li);
        event.target.style.backgroundColor = '#A2A9AF';
        event.target.disabled = true;
    }

})