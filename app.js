const bill = document.querySelector('.input-bill');
const tips = document.querySelectorAll('.percent');
const custom = document.querySelector('.custom-input')
const people = document.querySelector('#number-input');
const form = document.querySelector('.form');

custom.dataset.added = false;

// const numOfPeople = people.value;

custom.addEventListener('input', () => {
    let customTip = parseFloat(custom.value) / 100;
    custom.dataset.val = customTip;
    custom.dataset.added = true;
    console.log(custom.dataset);
});

const tipDisplay = document.querySelector('.tip-display');
const totalDisplay = document.querySelector('.total-display');

form.addEventListener('submit', (e) => {
    e.preventDefault();
});



bill.addEventListener('input', () => {

    // if (custom.dataset.added === true) {
    //     people.addEventListener('input', () => {
    //         // people.dataset.people = people.value;

    //         let numOfPeople = people.value;

    //         const billVal = bill.value;

    //         const tipAmount = parseFloat(custom.datatset.val) * parseFloat(billVal) / numOfPeople;
    //         const totalAmount = (parseFloat(billVal) / parseFloat(numOfPeople)) + parseFloat(tipAmount);

    //         tipDisplay.textContent = `$${tipAmount}`;
    //         totalDisplay.textContent = `$${totalAmount}`;
    //     });
    // } else 

    // For each button add a click event listener
    tips.forEach((tip) => {
        tip.addEventListener('click', () => {
            // When a button is clicked add background color
            tip.classList.toggle('color');

            // const amount = tip.id;
            let percentVal = tip.id;
            console.log(percentVal);

            if (custom.dataset.val != undefined) {
                // Check the number of People
                people.addEventListener('input', () => {
                    // Number of People val stored in variable
                    let numOfPeople = people.value;
                    //Bill val stored in variable
                    const billVal = bill.value;


                    const tipAmount = parseFloat(custom.dataset.val) * parseFloat(billVal) / numOfPeople;
                    const totalAmount = (parseFloat(billVal) / parseFloat(numOfPeople)) + parseFloat(tipAmount);

                    tipDisplay.textContent = `$${tipAmount}`;
                    totalDisplay.textContent = `$${totalAmount}`;

                });
            } else {
                people.addEventListener('input', () => {
                    // Number of People val stored in variable
                    let numOfPeople = people.value;
                    //Bill val stored in variable
                    const billVal = bill.value;


                    const tipAmount = parseFloat(percentVal) * parseFloat(billVal) / numOfPeople;
                    const totalAmount = (parseFloat(billVal) / parseFloat(numOfPeople)) + parseFloat(tipAmount);

                    tipDisplay.textContent = `$${tipAmount}`;
                    totalDisplay.textContent = `$${totalAmount}`;

                });
            }
        });
    });



});


function resetBtn() {
    const btn = document.querySelector('button');
    btn.addEventListener('click', () => {
        tipDisplay.textContent = '$0.00';
        totalDisplay.textContent = '$0.00';
        bill.value = '';
        bill.textContent = '';

        custom.textContent = '';
        custom.value = '';
        custom.dataset.added = false;

        people.value = '';
        tips.forEach((tip) => {
            tip.classList.remove('color');
        });

    })
}

resetBtn();




