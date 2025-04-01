const settings = {
  formSelector: '.modal__form',
  inputSelector: '.modal__input',
  submitButtonSelector: '.modal__submit',
  inactiveButtonClass: 'modal__submit_disabled',
  inputErrorClass: 'modal__input_error',
  errorClass: 'modal__error',
  //should inputList be part of this object/ can I qselectall 'inputSelector'?
};

const showInputError = (form, input, errorMessage, config) => {
  const errorElement = form.querySelector(`#${input.id}-error`);
  input.classList.add(config.inputErrorClass);
  errorElement.textContent = errorMessage;
};

const hideInputError = (form, input, config) => {
  const errorElement = form.querySelector(`#${input.id}-error`);
  input.classList.remove(config.inputErrorClass);
  errorElement.textContent = '';
};

const checkInputValidity = (form, input, config) => {
  if (!input.validity.valid) {
    showInputError(form, input, input.validationMessage, config);
  } else {
    hideInputError(form, input, config);
  }
};

const hasInvalidInput = (inputList, config) => {
  return inputList.some(input => {
    return !input.validity.valid;
  });
};

const toggleButtonState = (inputList, submitButton, config) => {
  console.log(hasInvalidInput(inputList, config));
  if (hasInvalidInput(inputList, config)) {
    submitButton.classList.add(config.inactiveButtonClass);
    submitButton.disabled = true;
  } else {
    submitButton.classList.remove(config.inactiveButtonClass);
    submitButton.disabled = false;
  }
};
//bc I'm calling and declaring this function simultaneously  would I later be able to call it again with a diff btn?
const disableButton = (button, config) => {
  button.disabled = true;
  button.classList.add(config.inactiveButtonClass);
};
const setEventListeners = (form, config) => {
  const inputList = Array.from(form.querySelectorAll(config.inputSelector));
  const submitButton = form.querySelector(config.submitButtonSelector);
  toggleButtonState(inputList, submitButton, config);
  inputList.forEach(input => {
    input.addEventListener('input', function () {
      checkInputValidity(form, input, config);
      toggleButtonState(inputList, submitButton, config);
    });
  });
};

const enableValidation = config => {
  const formList = document.querySelectorAll(config.formSelector);
  formList.forEach(form => {
    setEventListeners(form, config);
  });
};

enableValidation(settings);
