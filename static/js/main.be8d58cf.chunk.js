(this.webpackJsonpauthorquiz=this.webpackJsonpauthorquiz||[]).push([[0],[,,,,,function(e,a,n){e.exports=n(14)},,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){},,function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(4),o=n.n(i);n(10),n(11),n(12);function l(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"jumbotron col-10 offset-1"},r.a.createElement("h1",null,"Author Quiz"),r.a.createElement("p",null,"Select the book written by the author shown")))}function c(e){var a=e.title,n=e.onClick;return r.a.createElement("div",{className:"answer",onClick:function(){n(a)}},r.a.createElement("h4",null,a))}function m(e){var a=e.author,n=e.books,t=e.highlight,i=e.onAnswerSelected;return r.a.createElement("div",{className:"row turn",style:{backgroundColor:function(e){return{none:"",correct:"green",wrong:"red"}[e]}(t)}},r.a.createElement("div",{className:"col-4 offset-1"},r.a.createElement("img",{src:a.imageUrl,className:"author-image",alt:"Author"})),r.a.createElement("div",{className:"col-6"},n.map((function(e){return r.a.createElement(c,{title:e,key:e,onClick:i})}))))}function s(){return r.a.createElement("div",null)}function u(){return r.a.createElement("div",{id:"footer",className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("p",{className:"text-muted credt"},"All images are from ",r.a.createElement("a",{href:"www.google.com"},"Wikemedia Commons "),"and in the public domain")))}var g=function(e){var a=e.turnData,n=e.highlight,t=e.onAnswerSelected;return r.a.createElement("div",{className:"container-fluid"},r.a.createElement(l,null),r.a.createElement(m,Object.assign({},a,{highlight:n,onAnswerSelected:t})),r.a.createElement(s,null),r.a.createElement(u,null))},h=n(2);var d={turnData:function(e){var a=e.reduce((function(e,a,n){return e.concat(a.books)}),[]),n=Object(h.b)(a).slice(0,4),t=Object(h.a)(n);return{books:n,author:e.find((function(e){return e.books.some((function(e){return e===t}))}))}}([{name:"Stan Lee",imageUrl:"images/stanlee.jpg",imageSource:"Wikimedia Comics",books:["Fantastic Four","The Incredible Hulk","Amazing Fantasy","Tales of Suspense "]},{name:"Frank Miller",imageUrl:"images/frankmiller.jpg",imageSource:"Wikimedia Comics",books:["300","Batman: Year One","Wolverine by Claremont & Miller","Daredevil: Born Again"]},{name:"Alan Moore",imageUrl:"images/alanmoore.jpg",imageSource:"Wikimedia Comics",books:["Watchmen","The Killing Joke","Black Legacy","Black Sun Rising"]},{name:"Mark Millar",imageUrl:"images/markmillar.jpg",imageSource:"Wikimedia Comics",books:["Huck","Jupiter's Circle","Reborn","Empress"]},{name:"John Byrne",imageUrl:"images/johnbyrne.jpg",imageSource:"Wikimedia Comics",books:["The Avengers","Incredible Hulk","Alpha Flight","Amazing Spider-Man"]}]),highlight:""};function k(e){var a=d.turnData.author.books.some((function(a){return a===e}));d.highlight=a?"correct":"wrong",f()}function f(){o.a.render(r.a.createElement(g,Object.assign({},d,{onAnswerSelected:k})),document.getElementById("root"))}f()}],[[5,1,2]]]);
//# sourceMappingURL=main.be8d58cf.chunk.js.map