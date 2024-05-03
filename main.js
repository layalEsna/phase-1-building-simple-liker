// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

document.addEventListener('DOMContentLoaded', () => {
  const hearts = document.querySelectorAll('.like-glyph')

  hearts.forEach(heart => {
    heart.addEventListener('click', () => {
      if (heart.textContent === EMPTY_HEART) {

        mimicServerCall()
          .then(() => {
            heart.textContent = FULL_HEART
            heart.classList.add('activated-heart')
          })
          .catch(error => {
            const modalDiv = document.querySelector('#modal')
            const modalP = document.querySelector('#modal-message')
            modalP.textContent = error
            modalDiv.classList.remove('hidden')

            setTimeout(() => {
              modalDiv.classList.add('hidden')
            }, 3000)
          })
      } else {
        heart.textContent = EMPTY_HEART
        heart.classList.remove('activated-heart')
      }
    })
  })



})




















// document.addEventListener('DOMContentLoaded', () => {
//   const hearts = document.querySelectorAll('.like-glyph');

//   // Function to handle the click event on the heart icons
//   function handleClick(event) {
//     const heart = event.target;

//     // Check if the heart is empty or full
//     if (heart.textContent === EMPTY_HEART) {
//       // Simulate server call
//       mimicServerCall()
//         .then(() => {
//           // On success, change the heart to full and add the activated-heart class
//           heart.textContent = FULL_HEART;
//           heart.classList.add('activated-heart');
//         })
//         .catch(error => {
//           // On failure, display error modal with error message
//           const modal = document.getElementById('modal');
//           const modalMessage = document.getElementById('modal-message');
//           modalMessage.textContent = error;
//           modal.classList.remove('hidden');
//           // Hide the modal after 3 seconds
//           setTimeout(() => {
// modal.classList.add('hidden');
//           }, 3000);
//         });
//     } else {
//       // Change the heart back to empty and remove the activated-heart class
//       heart.textContent = EMPTY_HEART;
//       heart.classList.remove('activated-heart');
//     }
//   }

//   // Add click event listener to each heart icon
//   hearts.forEach(heart => {
//     heart.addEventListener('click', handleClick);
//   });
// });









//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

// function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       let isRandomFailure = Math.random() < .2
//       if (isRandomFailure) {
//         reject("Random server error. Try again.");
//       } else {
//         resolve("Pretend remote server notified of action!");
//       }
//     }, 300);
//   });
// }
