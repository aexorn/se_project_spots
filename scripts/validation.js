
const showInputError = (form, input, errorMessage) => {
  const errorElement = form.querySelector(`.${input.id}-error`);
  input.classList.add("form__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("form__input-error_active");
};

const hideInputError = (form, input) => {
  const errorElement = form.querySelector(`.${input.id}-error`);
  input.classList.remove("form__input_type_error");
  errorElement.classList.remove("form__input-error_active");
  errorElement.textContent = "";
};


checkInputValidity= (form, input) => {
if (!input.validity.valid) {
  showInputError(form, input, input.validationMessage);;
}
else {
return true;
};
console.log(input.validationMessage);
}

const hasInvalidInput = (inputList) => {
  return inputList.some((input) => {
    return !input.validity.valid;
  });
};

const toggleButtonState = (inputList, submitButton) => {
  console.log(hasInvalidInput(inputList));
  if (hasInvalidInput(inputList)) {
    submitButton.classList.add("button_inactive");
  } else {
    submitButton.classList.remove("button_inactive");
  }
};

const setEventListeners = (form)   => {
  const inputList = Array.from(form.querySelectorAll(".modal__input"));
  const submitButton = form.querySelector(".modal__submit");
  inputList.forEach(input) => {
    input.addEventListener("input", function () {
    checkInputValidity(form, input);
    toggleButtonState(InputList, submitButton);
  }
)}

}
const enableValidation = () => {
  const formList = document.querySelectorAll('.modal__form');
  formList.forEach((form) => {
    setEventListeners(form);
  });
};

enableValidation()