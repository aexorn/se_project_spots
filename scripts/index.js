const initialCards = [
  {
    name: "Val Thorens",
    link: "./images/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },
  {
    name: "Restaurant Terrace",
    link: "./images/2-photo-by-ceiline-from-pexels-min.jpg",
  },
  {
    name: "An Outdoor Cafe",
    link: "./images/3-photo-by-tubanur-dogan-from-pexels-min.jpg",
  },
  {
    name: "A very long bridge over the forest canopy",
    link: "./images/4-photo-by-maurice-laschet-from-pexels-min.jpg",
  },
  {
    name: "Tunnel with morning light",
    link: "./images/5-photo-by-van-anh-nguyen-from-pexels-min.jpg",
  },
  {
    name: "Mountain House",
    link: "./images/6-photo-by-moritz-feldmann-from-pexels-min.jpg",
  },
];

const profileEditBtn = document.querySelector(".profile__edit-btn");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__subtitle");

const editModal = document.querySelector("#edit-modal");
const editFormElement = editModal.querySelector(".modal__form");
const editModalCloseBtn = editModal.querySelector(".modal__close-btn");
const editModalNameInput = editModal.querySelector("#profile-name-input");
const editModalDescriptionInput = editModal.querySelector(
  "#profile-description-input"
);

const cardTemplate = document.querySelector("#card-template");
const cardList = document.querySelector(".cards__list");

function getCardElement(data) {
  console.log(data);
  const card = cardTemplate.content.querySelector(".card").cloneNode(true);
  const cardName = card.querySelector(".card__title");
  cardName.textContent = data.name;
  card.querySelector(".card__image").src = data.link;
  return card;
  // const cardLink = (card.querySelector(".card__image").src);
  // cardLink = data.link;
}

function openModal() {
  editModalNameInput.value = profileName.textContent;
  editModalDescriptionInput.value = profileDescription.textContent;
  editModal.classList.add("modal_opened");
}

function closeModal() {
  editModal.classList.remove("modal_opened");
}

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = editModalNameInput.value;
  profileDescription.textContent = editModalDescriptionInput.value;
  closeModal();
}

profileEditBtn.addEventListener("click", openModal);
editModalCloseBtn.addEventListener("click", closeModal);
editFormElement.addEventListener("submit", handleEditFormSubmit);

for (i = 0; i < initialCards.length; i++) {
  const card = getCardElement(initialCards[i]);
  cardList.prepend(card);
}
