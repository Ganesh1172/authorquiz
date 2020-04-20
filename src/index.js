import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AuthorQuiz from "./AuthorQuiz";
import { shuffle, sample } from "underscore";

const authors = [
  {
    name: "Stan Lee",
    imageUrl: "images/stanlee.jpg",
    imageSource: "Wikimedia Comics",
    books: [
      "Fantastic Four",
      "The Incredible Hulk",
      "Amazing Fantasy",
      "Tales of Suspense ",
    ],
  },
  {
    name: "Frank Miller",
    imageUrl: "images/frankmiller.jpg",
    imageSource: "Wikimedia Comics",
    books: [
      "300",
      "Batman: Year One",
      "Wolverine by Claremont & Miller",
      "Daredevil: Born Again",
    ],
  },
  {
    name: "Alan Moore",
    imageUrl: "images/alanmoore.jpg",
    imageSource: "Wikimedia Comics",
    books: ["Watchmen", "The Killing Joke", "Black Legacy", "Black Sun Rising"],
  },
  {
    name: "Mark Millar",
    imageUrl: "images/markmillar.jpg",
    imageSource: "Wikimedia Comics",
    books: ["Huck", "Jupiter's Circle", "Reborn", "Empress"],
  },
  {
    name: "John Byrne",
    imageUrl: "images/johnbyrne.jpg",
    imageSource: "Wikimedia Comics",
    books: [
      "The Avengers",
      "Incredible Hulk",
      "Alpha Flight",
      "Amazing Spider-Man",
    ],
  },
];

function getTurnData(authors) {
  const allBooks = authors.reduce(function (p, c, i) {
    return p.concat(c.books);
  }, []);
  const fourRandomBooks = shuffle(allBooks).slice(0, 4);
  const answer = sample(fourRandomBooks);

  return {
    books: fourRandomBooks,
    author: authors.find((author) =>
      author.books.some((title) => title === answer)
    ),
  };
}
const state = {
  turnData: getTurnData(authors),
};
ReactDOM.render(<AuthorQuiz {...state} />, document.getElementById("root"));
