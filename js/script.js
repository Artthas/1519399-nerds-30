
  /* Features List */

  const featuresItem = document.querySelectorAll(".features-item");
  const slideButton = document.querySelectorAll(".slide-button");

  const slideButtonClick = function (item, button) {
    button.addEventListener("click", function () {
      document.querySelector(".features-item-current").classList.remove("features-item-current");
      document.querySelector(".slide-button-current").classList.remove("slide-button-current");
      item.classList.add("features-item-current");
      button.classList.add("slide-button-current");
    });
  }
  for (let i = 0; i < featuresItem.length; i++) {
    slideButtonClick(featuresItem[i], slideButton[i]);
  }
 
 /* Write Us */

 const writeUs = document.querySelector(".write-us");
 const wrapper = document.querySelector(".wrapper");
 const buttonOpenWriteUs = document.querySelector(".footer-contacts-button");
 const buttonCloseWriteUs = writeUs.querySelector(".write-us-close");
 const messageForm = writeUs.querySelector(".message-form");
 const messageName = writeUs.querySelector(".user-name");
 const messageEmail = writeUs.querySelector(".user-email");
 const messageLetter = writeUs.querySelector(".user-letter");
 const classValidation = document.querySelectorAll(".message-form-validation");

 /* Checking Validation */

 let isStorageSupport = true;
 let storageName = "";
 let storageEmail = "";

 try {
   storageName = localStorage.getItem("name");
   storageEmail = localStorage.getItem("email");

 } catch (err) {
   isStorageSupport = false;
 }

 /* Opening Write Us */

 buttonOpenWriteUs.addEventListener("click", function (evt) {
   evt.preventDefault();
   wrapper.classList.add("write-us-wrapper");
   writeUs.classList.add("write-us-show");
   if (storageName) {
     messageName.value = storageName;
     if (storageEmail) {
       messageEmail.value = storageEmail;
     } else {
       messageEmail.focus();
     }
     messageLetter.focus();
   } else {
     messageName.focus();
   }
 });

 /* Closing Write Us */

 buttonCloseWriteUs.addEventListener("click", function () {
  writeUs.classList.remove("write-us-error");
  wrapper.classList.remove("write-us-wrapper");
  writeUs.classList.remove("write-us-show");
  classValidation = document.querySelectorAll(".message-form-validation");
   for (let i = 0; i < classValidation.length; i++) {
     classValidation[i].classList.remove("message-form-validation");
   }
 });

 window.addEventListener("keydown", function (evt) {
   if (evt.keyCode === 27) {
     if (writeUs.classList.contains("write-us-show")) {
       evt.preventDefault();
       writeUs.classList.remove("write-us-error");
       wrapper.classList.remove("write-us-wrapper");
       writeUs.classList.remove("write-us-show");
       classValidation = document.querySelectorAll(".message-form-validation");
       for (let i = 0; i < classValidation.length; i++) {
         classValidation[i].classList.remove("message-form-validation");
       }
     }
   }
 });

 /* Validation */

 messageForm.addEventListener("submit", function (evt) {
   if (!messageName.value || !messageEmail.value || !messageLetter.value) {
     evt.preventDefault();
     writeUs.classList.remove("write-us-error");
     writeUs.offsetWidth = writeUs.offsetWidth;
     writeUs.classList.add("write-us-error");
     if (!messageName.value) {
       messageName.classList.add("message-form-validation");
     }
     if (!messageEmail.value) {
       messageEmail.classList.add("message-form-validation");
     }
     if (!messageLetter.value) {
       messageLetter.classList.add("message-form-validation");
     }
   } else {
     if (isStorageSupport) {
       localStorage.setItem("name", messageName.value);
       localStorage.setItem("email", messageEmail.value);
     }
   }
 });

messageName.addEventListener("input", function () {
  messageName.classList.remove("message-form-validation");
})

messageEmail.addEventListener("input", function () {
  messageEmail.classList.remove("message-form-validation");
})

messageLetter.addEventListener("input", function () {
  messageLetter.classList.remove("message-form-validation");
})