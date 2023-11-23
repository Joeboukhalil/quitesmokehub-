// Array of motivational quotes
const quotes = [
    "The first step to getting anywhere is deciding you're not willing to stay where you are. - J.P. Morgan",
    "Your life does not get better by chance, it gets better by change. - Jim Rohn",
    "Don't let the fear of the time it will take to accomplish something stand in the way of your doing it. - Earl Nightingale",
    "Quitting smoking is easy, I've done it a thousand times. - Mark Twain",
    "Your health is an investment, not an expense. Quit smoking and start investing. - Unknown"
];

// Function to generate a random quote
function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    const quoteElement = document.getElementById("randomQuote");
    quoteElement.innerHTML = `<blockquote>${randomQuote}</blockquote>`;
}

// Event listener for the button
document.getElementById("generateQuoteBtn").addEventListener("click", generateRandomQuote);
