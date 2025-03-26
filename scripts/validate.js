const showInputError = (form, input, errorMessage) => {
  const errorElement = form.querySelector(`#${input.id}-error`);
  input.classList.add('modal__input_error');
  errorElement.textContent = errorMessage;
};

const hideInputError = (form, input) => {
  const errorElement = form.querySelector(`#${input.id}-error`);
  input.classList.remove("'modal__input_error'");
  errorElement.textContent = '';
};

const checkInputValidity = (form, input) => {
  if (!input.validity.valid) {
    showInputError(form, input, input.validationMessage);
  } else {
    hideInputError(form, input);
  }
};

const hasInvalidInput = inputList => {
  return inputList.some(input => {
    return !input.validity.valid;
  });
};

const toggleButtonState = (inputList, submitButton) => {
  console.log(hasInvalidInput(inputList));
  if (hasInvalidInput(inputList)) {
    submitButton.classList.add('modal__submit_disabled');
    submitButton.disabled = true;
  } else {
    submitButton.classList.remove('modal__submit_disabled');
    submitButton.disabled = false;
  }
};

const setEventListeners = form => {
  const inputList = Array.from(form.querySelectorAll('.modal__input'));
  const submitButton = form.querySelector('.modal__submit');
  toggleButtonState(inputList, submitButton);
  inputList.forEach(input => {
    input.addEventListener('input', function () {
      checkInputValidity(form, input);
      toggleButtonState(inputList, submitButton);
    });
  });
};

const enableValidation = () => {
  const formList = document.querySelectorAll('.modal__form');
  formList.forEach(form => {
    setEventListeners(form);
  });
};

enableValidation();
