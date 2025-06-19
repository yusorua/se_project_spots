const initialCards = [{
  name: "Val Thorens"
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
},
{
  name: "Restaurant terrace"
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
},
{
  name: "An outdoor cafe"
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
},
{
  name: "A very long bridge, over the forest and through the trees"
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
},
{
  name: "Tunnel with morning light"
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
},
{
  name: "Mountain house"
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
},]; 

const profileEditBtn = document.querySelector(".profile__edit-btn");
const profileEditModal = document.querySelector("#edit-profile-modal");
const editProfileCloseBtn = profileEditModal.querySelector(".modal__close-btn");
const editProfileNameInput = profileEditModal.querySelector("#name");
const editProfileForm = profileEditModal.querySelector(".modal__form");
const editProfileDescInput = profileEditModal.querySelector("#description");

const newPostBtn = document.querySelector(".profile__add-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");
const newPostForm = newPostModal.querySelector(".modal__form");
const newPostTitleInput = newPostModal.querySelector("#image-caption");
const newPostImageInput = newPostModal.querySelector("#image-link");

const profileNameEl = document.querySelector(".profile__name");
const ProfileDescriptionEl = document.querySelector(".profile__description");

profileEditBtn.addEventListener("click", function () {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescInput.value = ProfileDescriptionEl.textContent;
  profileEditModal.classList.add("modal_is-opened");
});

editProfileCloseBtn.addEventListener("click", function () {
  profileEditModal.classList.remove("modal_is-opened");
});

newPostBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});

newPostCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});

function handleEditProfileSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  ProfileDescriptionEl.textContent = editProfileDescInput.value;
  profileEditModal.classList.remove("modal_is-opened");
}

editProfileForm.addEventListener("submit", handleEditProfileSubmit);

function handleNewPostSubmit(evt) {
  evt.preventDefault();
  console.log(newPostImageInput.value, newPostTitleInput.value);
  newPostModal.classList.remove("modal_is-opened");
}

newPostForm.addEventListener("submit", handleNewPostSubmit);

initialCards.forEach(function (item) {
  console.log(item.name, item.link);
});