// commone function   
function mainBlance(donate, mainBlance) {

    const mainResult = mainBlance - donate;
    return mainResult;
}
function donateSum(donate, donateBlance) {
    const sum = donateBlance + donate;
    return sum;
}

// bloge function 

document.getElementById('blogeBTn').addEventListener('click', function () {
    window.location.href = './add.html';

})


// main code 

console.log('Tahmid alvi');

const donationBtn = document.getElementById('Donation-btn');
const historyBtn = document.getElementById('historu-btn');
const historySection = document.getElementById('history-section');
const donationSection = document.getElementById('donation-section');
const donateBalancce = document.getElementById('donate-blance1');
const mainBlanceEl = parseFloat(document.getElementById('mainBlanceIs').innerText);
const historyTeextChange = document.getElementById('histry-text');
console.log(mainBlanceEl);
let currentTime = new Date();
const WeekIntext = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const mounthInText = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

// card 1

document.getElementById('donate-btn1').addEventListener('click', function () {
    const inputvalue1 = parseFloat(document.getElementById('donateB1').value);
    if (inputvalue1 <= 0 || mainBlanceEl < inputvalue1 || isNaN(inputvalue1)) {
        alert("Your amount in Invalid");

    }
    else {
        const cardBlan3 = parseFloat(document.getElementById('card-blance1').innerText);
        const sum = donateSum(inputvalue1, cardBlan3);
        document.getElementById('card-blance1').innerText = sum;
        const divide = mainBlance(inputvalue1, mainBlanceEl);
        document.getElementById('mainBlanceIs').innerText = divide;

        const corruntDay = currentTime.getDay();
        const dayTextR = WeekIntext[corruntDay];

        const monthText = currentTime.getMonth();
        const monthInR = mounthInText[monthText];

        const h1Is = document.getElementById('card1-tittle').innerText;
        historyTeextChange.innerHTML += `
        <div class="border rounded-lg">

            
                <h1 class="text-xl font-bold mb-4  px-8 pt-8">${inputvalue1} Taka is Donated for ${h1Is}</h1>
                <p class="text-sm font-light  p-8 pt-0">Date: ${dayTextR} ${monthInR} ${currentTime.getDate()} ${currentTime.getFullYear()} ${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()} GMT +0600 (Bangladesh Standard Time)</p></div>
    `
        document.getElementById('donateB1').value = '';
        document.getElementById('donate-btn').addEventListener(onclick = my_modal_5.show());

    }
})

// card 2
document.getElementById('donate-btn2').addEventListener('click', function () {
    const inputvalue = parseFloat(document.getElementById('donateB2').value);
    if (inputvalue <= 0 || mainBlanceEl < inputvalue || isNaN(inputvalue)) {
        alert("Your amount in Invalid");

    }
    else {
        const cardBlan3 = parseFloat(document.getElementById('card-blance2').innerText);
        const sum = donateSum(inputvalue, cardBlan3);
        document.getElementById('card-blance2').innerText = sum;
        const divide = mainBlance(inputvalue, mainBlanceEl);
        document.getElementById('mainBlanceIs').innerText = divide;

        const corruntDay = currentTime.getDay();
        const dayTextR = WeekIntext[corruntDay];

        const monthText = currentTime.getMonth();
        const monthInR = mounthInText[monthText];

        const h1Is = document.getElementById('card2-tittle').innerText;
        historyTeextChange.innerHTML += `
        <div class="border rounded-lg">

            
                <h1 class="text-xl font-bold mb-4  px-8 pt-8">${inputvalue} Taka is Donated for ${h1Is}</h1>
                <p class="text-sm font-light  p-8 pt-0">Date: ${dayTextR} ${monthInR} ${currentTime.getDate()} ${currentTime.getFullYear()} ${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()} GMT +0600 (Bangladesh Standard Time)</p></div>
    `

        document.getElementById('donateB2').value = '';

        document.getElementById('donate-btn2').addEventListener(onclick = my_modal_4.show());
    }
})
// card 3 
document.getElementById('donate-btn').addEventListener('click', function () {
    const inputvalue = parseFloat(document.getElementById('donateB3').value);
    if (inputvalue <= 0 || mainBlanceEl < inputvalue || isNaN(inputvalue)) {
        alert("Your amount in Invalid");

    }
    else {
        const cardBlan3 = parseFloat(document.getElementById('card-blance3').innerText);
        const sum = donateSum(inputvalue, cardBlan3);
        document.getElementById('card-blance3').innerText = sum;
        const divide = mainBlance(inputvalue, mainBlanceEl);
        document.getElementById('mainBlanceIs').innerText = divide;

        const corruntDay = currentTime.getDay();
        const dayTextR = WeekIntext[corruntDay];

        const monthText = currentTime.getMonth();
        const monthInR = mounthInText[monthText];

        const h1Is = document.getElementById('card3-tittle').innerText;
        historyTeextChange.innerHTML += `
        <div class="border rounded-lg">

                <h1 class="text-xl font-bold mb-4  px-8 pt-8">${inputvalue} Taka is Donated for ${h1Is}</h1>
                <p class="text-sm font-light  p-8 pt-0">Date: ${dayTextR} ${monthInR} ${currentTime.getDate()} ${currentTime.getFullYear()} ${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()} GMT +0600 (Bangladesh Standard Time)</p></div>
    `
        document.getElementById('donateB3').value = '';
        document.getElementById('donate-btn').addEventListener(onclick = my_modal_5.show());
    }
})

historyBtn.addEventListener('click', function () {
    historyBtn.classList.add('bg-btnpramary', 'font-semibold');
    historyBtn.classList.remove('border', 'border-coineClor', 'font-medium');
    donationBtn.classList.remove('bg-btnpramary', 'font-semibold');
    donationBtn.classList.add('border', 'border-coineClor', 'font-medium');

    historySection.classList.remove('hidden')
    donationSection.classList.add('hidden')
})

donationBtn.addEventListener('click', function () {
    donationBtn.classList.add('bg-btnpramary', 'font-semibold');
    donationBtn.classList.remove('border', 'border-coineClor');
    historyBtn.classList.remove('bg-btnpramary', 'font-semibold');
    historyBtn.classList.add('border', 'border-coineClor', 'font-medium');

    donationSection.classList.remove('hidden')
    historySection.classList.add('hidden')
})