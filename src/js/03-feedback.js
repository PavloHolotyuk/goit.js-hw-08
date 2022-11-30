import throttle from 'lodash.throttle';
import localStorageApi from './localStorageApi';

const mainForm = document.querySelector('.feedback-form');
const { email, message } = mainForm.elements;
let formData = {};

fillForm();

mainForm.addEventListener('input', throttle(onFormInput, 500));
mainForm.addEventListener('submit', clearForm);

function onFormInput(e) {
  formData.email = email.value;
  formData.message = message.value;

  localStorageApi.save('formData', formData);
}

function clearForm(e) {
  e.preventDefault();
  e.target.reset();
  console.log(localStorageApi.load('formData'));
  localStorageApi.remove('formData');
}

function fillForm() {
  const userDataFromLS = localStorageApi.load('formData');

  for (const prop in userDataFromLS) {
    if (userDataFromLS.hasOwnProperty(prop)) {
      mainForm.elements[prop].value = userDataFromLS[prop];
    }
  }
}
