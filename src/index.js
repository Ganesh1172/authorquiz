import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AuthorQuiz from "./AuthorQuiz";

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
];

const state = {
  turnData: {
    author: authors[0],
    books: authors[0].books,
  },
};
ReactDOM.render(<AuthorQuiz {...state} />, document.getElementById("root"));
