// Retrive HTML element
const quote = document.querySelector('#quote');
const author = document.querySelector('#author');
const btn = document.querySelector('#generator');
const timerElem = document.getElementById('timer');

// Fetch API Data
const loadQuotes = () => {
    fetch('https://api.kanye.rest')
        .then(response => response.json())
        .then(data => displayQuote(data))
}

// Display Quote to HTML Element
const displayQuote = (data) => {
    quote.innerText = `‟${data.quote}”`;
    author.innerText = '- MD Kawsar Ali';
}

// Initial Quote
window.addEventListener('load', () => {
    loadQuotes();
});

// Quote Generator Handler
btn.addEventListener('click', function () {
    loadQuotes();
    timer = 10; // Reset Timer to 10
    timerElem.innerText = timer;
});

// Automatically Load Quote after 10 seconds
let timer = 10;
setInterval(function () {
    --timer;
    //Restart Timer after 10 seconds
    if (timer < 1) {
        timer = 10; // Reset Timer to 10
        loadQuotes();
    }
    timerElem.innerText = timer;
}, 1000);