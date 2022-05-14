var body = document.querySelector('body');

// Popup feedback form
var formOpenBtn = document.querySelector('.header_feedback-link');
var feedbackForm = document.querySelector('.feedback');
var formCloseBtn = document.querySelector('.feedback_close-btn');
var input = document.querySelectorAll('.feedback_input');

function showForm(event) {
  event.preventDefault();
  body.classList.add('overlay');
  feedbackForm.classList.add('feedback_visible');
  input[0].focus();
  feedbackForm.classList.add('feedback_animate');
}
function closeForm(event) {
  event.preventDefault();
  feedbackForm.classList.remove('feedback_animate');
  feedbackForm.classList.remove('feedback_visible');
  body.classList.remove('overlay');
}
function closeFormEsc(event) {
  if (event.keyCode == 27) {
    feedbackForm.classList.remove('feedback_animate');
    feedbackForm.classList.remove('feedback_visible');
    body.classList.remove('overlay');
  }
}

formOpenBtn.addEventListener('click', showForm);
formCloseBtn.addEventListener('click', closeForm);
window.addEventListener('keydown', closeFormEsc);