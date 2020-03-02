// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomQuote() {
//add random quotes I love
  const randomQuote =
      [' "Knowing is not enough we must apply, Willing is not enough we must do -Bruce Lee"', 
      ' "Great Spirits have always encountered violient opposition from mediocre minds - Albert Einstein"',
       '"Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. If you haven\'t found it yet, keep looking. Don\'t settle." - Steve Jobs', 
       '"Fear can hold you prisoner, Hope can set you free." - Shawshank Redemption'];

  // Pick a random greeting.
  const quote = randomQuote[Math.floor(Math.random() * randomQuote.length)];

  // Add it to the page.
  const quoteContainer = document.getElementById('quote-container');
  quoteContainer.innerText = quote;
}

//use fetch to request content from server and add it to page.
// async function getMyName() {
//   const response = await fetch('/data');
//   const quote = await response.text();
//   document.getElementById('name-container').innerText = quote;
// }

function getMessages() {
  fetch('/data').then(response => response.json()).then((messages) => {
    // console.log(messages.message_1);
    // console.log(messages.message_2);
    // console.log(messages.message_3);
    console.log(messages);

    

    const commentList = document.getElementById('message-container');
    commentList.innerHTML = '';
    for( let element in messages ){
    console.log( element.text );
    commentList.appendChild(createListElement(element.text));
    }
    // commentList.appendChild(
    //     createListElement('Comment 1: ' + messages.message_1));
    // commentList.appendChild(
    //     createListElement('Comment 2: ' + messages.message_2));
    // commentList.appendChild(
    //     createListElement('Comment 3: ' + messages.message_3));
    
  });
}

/** Creates an <li> element containing text. */
function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}



