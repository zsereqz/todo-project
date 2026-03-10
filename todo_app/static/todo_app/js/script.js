const text = [
  {
    text: "«Не откладывай на завтра то, что можно сделать сегодня.»",
    author: "Б. Франклин"
  },
  {
    text: "«Будьте тем изменением, которое вы хотите увидеть в мире.»",
    author: "Махатма Ганди"
  },
  {
    text: "«Жизнь — это то, что с тобой происходит, пока ты строишь планы.»",
    author: "Джон Леннон"
  },
];



const p = document.createElement("p");
const p1 = document.createElement("span")

let quotes = document.getElementById("quote-container")
const random = Math.floor(Math.random() * text.length )

p.className = "for_text"
p1.className = 'for_span'

const quote = text[random]
p.textContent = ` ${quote.text} `;
p1.textContent = `${quote.author}`



quotes.appendChild(p)
quotes.appendChild(p1)