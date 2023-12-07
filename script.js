const fruits = ['банан.png', 'яблоко.png', 'груша.png'];

function getRandomFruit() {
    return fruits[Math.floor(Math.random() * fruits.length)];
}

function startGame() {
    const playerName = document.getElementById('playerName').value;
    if (!playerName) {
        alert('Будь ласка, введіть ім\'я.');
        return;
    }

    const resultElement = document.getElementById('result');
    resultElement.innerText = '';

    const slots = ['slot1', 'slot2', 'slot3'];
    for (const slot of slots) {
        const randomFruit = getRandomFruit();
        const slotElement = document.getElementById(slot);

        // для запуску анімації
        slotElement.classList.add('animate');
        
       
        slotElement.style.backgroundImage = `url(${randomFruit})`;
        slotElement.setAttribute('data-fruit', randomFruit);
    }

    setTimeout(() => {
        // Видаляємо клас .animate після закінчення анімації
        for (const slot of slots) {
            document.getElementById(slot).classList.remove('animate');
        }

        if (checkWin(slots)) {
            resultElement.innerText = `Вітаємо, ${playerName}! ВИ ПЕРЕМОЖЕЦЬ!`;
        } else {
            resultElement.innerText = `Спробуйте ще раз, ${playerName}.`;
        }
    }, 2000); // Затримка в 2000 мс для відтворення анімації
}

function checkWin(slots) {
    const firstSlotValue = document.getElementById(slots[0]).getAttribute('data-fruit');
    return slots.every(slot => document.getElementById(slot).getAttribute('data-fruit') === firstSlotValue);
}

