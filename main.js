// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let modal = document.getElementById('modal');
modal.className= "hidden"
let hearts = document.querySelectorAll(".like-glyph");
hearts.forEach(heart => heart.addEventListener('click', callAndRespond));

function callAndRespond(likedPost){
  let likeHeart = likedPost.target;
  mimicServerCall()
    .then(function(){
      if (likeHeart.innerText === EMPTY_HEART){
        likeHeart.innerText = FULL_HEART;
        likeHeart.classList.add('activated-heart')}
      else if (likeHeart.innerText === FULL_HEART){
        likeHeart.innerText = EMPTY_HEART;
        likeHeart.classList.remove('activated-heart')
      }
    })
    .catch(errorAlert)
}

function errorAlert(){
  modal.className =" ";
  setTimeout(()=>modal.classList.add('hidden'), 3000)
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
