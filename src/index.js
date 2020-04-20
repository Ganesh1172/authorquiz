import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AuthorQuiz from "./AuthorQuiz";
import { shuffle, sample } from "underscore";

const authors = [
  {
    name: "Mark Twain",
    imageUrl: "images/pic.jpg",
    imageSource: "Wikimedia Commons",
    books: [
      "The Advantures of Huckleberry Finn",
      "Harry Potter",
      "Wings of Fire",
    ],
  },
  {
    name: "Mark Twain",
    imageUrl: "images/pic.jpg",
    imageSource: "Wikimedia Commons",
    books: [
      "The Advantures of Huckleberry Finn",
      "Harry Potter",
      "Wings of Fire",
    ],
  },
  {
    name: "Mark Twain",
    imageUrl: "images/pic.jpg",
    imageSource: "Wikimedia Commons",
    books: [
      "The Advantures of Huckleberry Finn",
      "Harry Potter",
      "Wings of Fire",
    ],
  },
  {
    name: "Mark Twain",
    imageUrl: "images/pic.jpg",
    imageSource: "Wikimedia Commons",
    books: [
      "The Advantures of Huckleberry Finn",
      "Harry Potter",
      "Wings of Fire",
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
