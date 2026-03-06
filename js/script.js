/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Luis Curiel
******************************************/


/*** 
 * `quotes` array 
***/

const quotes = [
  {
    "quote": "The unexamined life is not worth living.",
    "philosopher": "Socrates",
    "citation": "Plato, Apology",
    "year": -399
  },
  {
    "quote": "I think, therefore I am.",
    "philosopher": "René Descartes"
  },
  {
    "quote": "Happiness is not an ideal of reason but of imagination.",
    "philosopher": "Immanuel Kant",
    "citation": "Critique of Pure Reason"
  },
  {
    "quote": "He who has a why to live can bear almost any how.",
    "philosopher": "Friedrich Nietzsche",
    "year": 1889
  },
  {
    "quote": "Man is condemned to be free.",
    "philosopher": "Jean-Paul Sartre"
  }
]

/***
 * `getRandomQuote` function
 * Returns a random quote.
 *
 * @return {object} The random quote object.
 */

const getRandomQuote = () => { 
  // creates random number between 0 and the length of the quotes array
  const randomnNum = Math.floor(Math.random() * quotes.length);

  // using the random number we retrieve a random quote
  const randomQuote = quotes[randomnNum];

  return randomQuote;
 }


/***
 * `printQuote` function
 * Using getRandomQuote() builds an html string and inserts it 'quote-box' element
 */

const printQuote = () => { 
  //random object form quotes array
  const randomQuote = getRandomQuote();

  // Data extracted from the object
  const quote = randomQuote.quote;
  const source = randomQuote.philosopher;
  const citation = randomQuote.citation;
  const year = randomQuote.year;

  //String to insert into the browser
  let html = `
    <p class="quote">${quote}</p> 
    <p class="source">${source}
  `

  // Check whether the object has either a citation or year key
  if(citation && year) {
    html += `
      <span class="citation"> ${citation}</span>
      <span class="year">${year}</span></p>
    `
  } else if (citation) {
    html += `<span class="citation"> ${citation}</span></p>`
  } else if (year) {
    html += `<span class="year">${year}</span></p>`
  } else {
    html += "</p>"
  }

  //Inserts string to 'quote-box' element
  document.getElementById('quote-box').innerHTML = html;
 }

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);