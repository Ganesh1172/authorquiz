(this.webpackJsonpauthorquiz=this.webpackJsonpauthorquiz||[]).push([[0],[,,,,,function(e,a,n){e.exports=n(14)},,,,,function(e,a,n){},function(e,a,n){},function(e,a,n){},,function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(4),o=n.n(i);n(10),n(11),n(12);function l(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"jumbotron col-10 offset-1"},r.a.createElement("h1",null,"Author Quiz"),r.a.createElement("p",null,"Select the book written by the author shown")))}function c(e){var a=e.title;return r.a.createElement("div",{className:"answer"},r.a.createElement("h4",null,a))}function m(e){var a=e.author,n=e.books;return r.a.createElement("div",{className:"row turn",style:{backgroundColor:"white"}},r.a.createElement("div",{className:"col-4 offset-1"},r.a.createElement("img",{src:a.imageUrl,className:"author-image",alt:"Author"})),r.a.createElement("div",{className:"col-6"},n.map((function(e){return r.a.createElement(c,{title:e,key:e})}))))}function s(){return r.a.createElement("div",null)}function u(){return r.a.createElement("div",{id:"footer",className:"row"},r.a.createElement("div",{className:"col-12"},r.a.createElement("p",{className:"text-muted credt"},"All images are from ",r.a.createElement("a",{href:"www.google.com"},"Wikemedia Commons "),"and in the public domain")))}var g=function(e){var a=e.turnData;return r.a.createElement("div",{className:"container-fluid"},r.a.createElement(l,null),r.a.createElement(m,a),r.a.createElement(s,null),r.a.createElement(u,null))},d=n(2);var k={turnData:function(e){var a=e.reduce((function(e,a,n){return e.concat(a.books)}),[]),n=Object(d.b)(a).slice(0,4),t=Object(d.a)(n);return{books:n,author:e.find((function(e){return e.books.some((function(e){return e===t}))}))}}([{name:"Stan Lee",imageUrl:"images/stanlee.jpg",imageSource:"Wikimedia Comics",books:["Fantastic Four","The Incredible Hulk","Amazing Fantasy","Tales of Suspense "]},{name:"Frank Miller",imageUrl:"images/frankmiller.jpg",imageSource:"Wikimedia Comics",books:["300","Batman: Year One","Wolverine by Claremont & Miller","Daredevil: Born Again"]},{name:"Alan Moore",imageUrl:"images/alanmoore.jpg",imageSource:"Wikimedia Comics",books:["Watchmen","The Killing Joke","Black Legacy","Black Sun Rising"]},{name:"Mark Millar",imageUrl:"images/markmillar.jpg",imageSource:"Wikimedia Comics",books:["Huck","Jupiter's Circle","Reborn","Empress"]},{name:"John Byrne",imageUrl:"images/johnbyrne.jpg",imageSource:"Wikimedia Comics",books:["The Avengers","Incredible Hulk","Alpha Flight","Amazing Spider-Man"]}])};o.a.render(r.a.createElement(g,k),document.getElementById("root"))}],[[5,1,2]]]);
//# sourceMappingURL=main.66a40b93.chunk.js.map