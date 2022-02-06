const quotes = [
    {
        quote: "Im find thank you And you?",
        author: "Koren english teacher"
    },
    {
        quote: "Do you know kimchi?",
        author: "Country BBong"
    },
    {
        quote: "Are you Crazy?",
        author: "American"
    },
    {
        quote: "Don't dream just do it",
        author: "Kim dong hyun"
    },
    {
        quote: "Wake up! is time to go to school",
        author: "Mother"
    },
    {
        quote: "Hello oliver teacher~",
        author: "Oliver"
    },
    {
        quote: "Person is problem",
        author: "First in"
    },
    {
        quote: "Im sorry~~~",
        author: "Go win duck"
    },
    {   
        quote: "QR check in please~",
        author: "Alba"
    },
    {
        quote: "Believe in yourself",
        author: "KDH"
    }


];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

/**
 *      Math.round() : 반올림
 *      Math.ceil() : 올림
 *      Math.floor() : 버림
 * 
 */

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;