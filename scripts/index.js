const initialCards = [
  {
    name: 'Val Thorens',
    link: './images/1-photo-by-moritz-feldmann-from-pexels.jpg',
    //alt:"a monitor in darkened room displays an image of a snow covered cabin in the mountains"
  },
  {
    name: 'Restaurant Terrace',
    link: './images/2-photo-by-ceiline-from-pexels-min.jpg',
    //alt: "flowers grow around the edges of the dark green awning of a restaurant on a cobbled street corner while the patio seating below sits empty on an overcast day"
  },
  {
    name: 'An Outdoor Cafe',
    link: './images/3-photo-by-tubanur-dogan-from-pexels-min.jpg',
    //  alt: "from above we see people gathered around folding black tables in a bustling intimate outdoor patio space"
  },
  {
    name: 'A very long bridge over the forest canopy',
    link: './images/4-photo-by-maurice-laschet-from-pexels-min.jpg',
    // alt: "a bridge narrows as it sprawls into the mass of treetops that dominate the rest of the frame with green foliage just beginning to twinge orange with the season"
  },
  {
    name: 'Tunnel with morning light',
    link: './images/5-photo-by-van-anh-nguyen-from-pexels-min.jpg',
    // alt: "extending into the frame for what feels like a great distance, an impressively high wood ceilinged tunnel lets cool morning light flood in the windows that make up both its sides. "
  },
  {
    name: 'Mountain House',
    link: './images/6-photo-by-moritz-feldmann-from-pexels-min.jpg',
    //alt: "a snow storm whips around an isolate rustic and weather worn cabin which is in stark contrast to the tall, powder caked aspens in the background"
  },
];

// Variable declarations in GLOBAL scope (note to self-don't do this in future, use a design pattern)
const closeButtons = document.querySelectorAll('.modal__close');

// For edit modal
const profileEditBtn = document.querySelector('.profile__edit');
const profileName = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__subtitle');
const editModal = document.querySelector('#edit-modal');
const editForm = document.forms['edit-profile-form'];
const editModalNameInput = editModal.querySelector('#profile-name-input');
const editModalDescriptionInput = editModal.querySelector(
  '#profile-description-input'
);
const modalOverlay = document.querySelector('.modal_opened');

// For new post modal
const newPostBtn = document.querySelector('.profile__add-new');
const newPostModal = document.querySelector('#new-post-modal');
const newPostForm = document.forms['new-post-form'];
const newPostCaptionInput = newPostModal.querySelector(
  '#new-image-caption-input'
);
const newPostURLInput = newPostModal.querySelector('#new-image-input');

// For preview modal
const previewModal = document.querySelector('#preview-modal');
const previewImg = previewModal.querySelector('.modal__image');
const previewCaption = previewModal.querySelector('.modal__caption');

// For card
const cardTemplate = document.querySelector('#card-template');
const cardList = document.querySelector('.cards__list');

// Function to generate cards according to template id'd 'card-template'
function getCardElement(data) {
  console.log(data);
  const card = cardTemplate.content.querySelector('.card').cloneNode(true);
  const cardImg = card.querySelector('.card__image');
  card.querySelector('.card__title').textContent = data.name;
  cardImg.src = data.link;
  cardImg.alt = data.name;
  cardImg.addEventListener('click', () => {
    openModal(previewModal);
    previewImg.src = data.link;
    previewImg.alt = data.name;
    previewCaption.textContent = data.name;
  });
  const likeBtn = card.querySelector('.card__like');
  likeBtn.addEventListener('click', () => {
    likeBtn.classList.toggle('card__like_liked');
  });
  const deleteBtn = card.querySelector('.card__delete');
  deleteBtn.addEventListener('click', () => {
    card.remove();
  });

  return card;
}

function renderCard(item, method = 'append') {
  const card = getCardElement(item);
  cardList[method](card);
}

// General modal functions
function openModal(modal) {
  modal.classList.add('modal_opened');
}

function closeModal(modal) {
  modal.classList.remove('modal_opened');
}

// Function to apply user input on PROFILE EDIT form to profile
function submitEditForm(evt) {
  evt.preventDefault();
  profileName.textContent = editModalNameInput.value;
  profileDescription.textContent = editModalDescriptionInput.value;
  evt.target.reset();
  closeModal(editModal);
}

// Function to apply user input on NEW POST form
function submitNewPost(evt) {
  evt.preventDefault();
  const newPostInputs = {
    name: newPostCaptionInput.value,
    link: newPostURLInput.value,
  };
  const newPost = getCardElement(newPostInputs);
  cardList.prepend(newPost);
  evt.target.reset();
  // Should I still close the modal here? Or leave it open in case of multiple uploads?
  closeModal(newPostModal);
}

// Event listeners

// Universal close btn handler
closeButtons.forEach(button => {
  const popup = button.closest('.modal');
  button.addEventListener('click', () => {
    closeModal(popup);
  });
});

// Event listeners for profile edit
profileEditBtn.addEventListener('click', () => {
  editModalNameInput.value = profileName.textContent;
  editModalDescriptionInput.value = profileDescription.textContent;
  openModal(editModal);
});

editForm.addEventListener('submit', submitEditForm);

// Event listeners for new post
newPostBtn.addEventListener('click', () => {
  openModal(newPostModal);
});

newPostForm.addEventListener('submit', submitNewPost);

// Runs on page load
initialCards.forEach(cardItem => {
  renderCard(cardItem);
});

//event listener to click out o modal
// modalOverlay.addEventListener('click', () => {
//   closeModal(editModal);
// })
