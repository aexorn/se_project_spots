const initialCards = [
  {
    name: "Val Thorens",
    link: "./images/1-photo-by-moritz-feldmann-from-pexels.jpg",
    alt:"a monitor in darkened room displays an image of a snow covered cabin in the mountains"
  },
  {
    name: "Restaurant Terrace",
    link: "./images/2-photo-by-ceiline-from-pexels-min.jpg",
    alt: "flowers grow around the edges of the dark green awning of a restaurant on a cobbled street corner while the patio seating below sits empty on an overcast day"
  },
  {
    name: "An Outdoor Cafe",
    link: "./images/3-photo-by-tubanur-dogan-from-pexels-min.jpg",
    alt: "from above we see people gathered around folding black tables in a bustling intimate outdoor patio space"
  },
  {
    name: "A very long bridge over the forest canopy",
    link: "./images/4-photo-by-maurice-laschet-from-pexels-min.jpg",
    alt: "a bridge narrows as it sprawls into the mass of treetops that dominate the rest of the frame with green foliage just beginning to twinge orange with the season"
  },
  {
    name: "Tunnel with morning light",
    link: "./images/5-photo-by-van-anh-nguyen-from-pexels-min.jpg",
    alt: "extending into the frame for what feels like a great distance, an impressively high wood ceilinged tunnel lets cool morning light flood in the windows that make up both its sides. "
  },
  {
    name: "Mountain House",
    link: "./images/6-photo-by-moritz-feldmann-from-pexels-min.jpg",
    alt: "a snow storm whips around an isolate rustic and weather worn cabin which is in stark contrast to the tall, powder caked aspens in the background"
  },
];

const profileEditBtn = document.querySelector(".profile__edit");
const profileName = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__subtitle");

const editModal = document.querySelector("#edit-modal");
const editFormElement = editModal.querySelector(".modal__form");
const editModalCloseBtn = editModal.querySelector(".modal__close");
const editModalNameInput = editModal.querySelector("#profile-name-input");
const editModalDescriptionInput = editModal.querySelector(
  "#profile-description-input"
);

const cardTemplate = document.querySelector("#card-template");
const cardList = document.querySelector(".cards__list");

function getCardElement(data) {
  console.log(data);
  const card = cardTemplate.content.querySelector(".card").cloneNode(true);
  const cardImg = card.querySelector(".card__image");
  card.querySelector(".card__title").textContent = data.name;
  cardImg.src = data.link;
  cardImg.alt = data.alt;
  return card;
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
