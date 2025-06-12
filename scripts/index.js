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
