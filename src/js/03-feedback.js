import throttle from 'lodash.throttle'

const feedbackForm = document.querySelector('form')
const STORAGE_KEY = "feedback-form-state"
let formData = {email:'', message:''}

feedbackForm.addEventListener('submit', onFormSubmit);
feedbackForm.addEventListener('input', throttle(formInput, 500));
// isertSaveData();


function onFormSubmit(event) {
    event.preventDefault();
    console.log(formData);
    event.target.reset();
    localStorage.removeItem(STORAGE_KEY);
}


function formInput (event) {

    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}


// function isertSaveData () {
//     if (localStorage.length !== 0) {
//         const savedData = localStorage.getItem(STORAGE_KEY)
//         const savedDataObj = JSON.parse(savedData);
//         feedbackForm.email.value = savedDataObj.email;
//         feedbackForm.message.value = savedDataObj.message;
//     }
// }


if (localStorage.getItem(STORAGE_KEY)) {
    formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    for (let key in formData) {
        feedbackForm.elements[key].value = formData[key];
    }
}
