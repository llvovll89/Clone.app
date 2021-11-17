const quotes = [
    {
        quote: 'I have failed over and over and over again in my life and that is why I succeed.',
        author: 'Michael Jordan',
    },
    {
        quote: 'But I know, somehow, that only when it is dark enough can you see the stars.',
        author: 'Martin Luther King, Jr',
    },
    {
        quote: 'Grind Hard, Shine Hard.',
        author: 'Dwayne Johnson',
    },
    {
        quote: 'I didn’t get there by wishing for it or hoping for it, but by working for it. ',
        author: 'Estée Lauder',
    },
    {
        quote: 'Tough times never last, but tough people do.',
        author: 'Robert H. Schuller',
    },
    {
        quote: 'There are better starters than me but I’m a strong finisher.',
        author: 'Usain Bolt',
    },
    {
        quote: 'You cannot change what you are, only what you do',
        author: 'Philip Pullman',
    },
]; // quotes Array item *7

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

// Math.random() => 0 ~ 1사이 랜덤숫자 * Array의 길이만큼 곱하기 
//floor는 내림차순(1.1~9 =1)
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;