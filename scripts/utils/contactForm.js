
const contactModal = document.querySelector(".contact__modal");
const modalBtn = document.querySelector(".btn-contact");
const closeBtn = document.querySelector(".contact__button-close-dialog");
const form = document.querySelector(".contact__form");
const formFinised = document.getElementById('validationForm');
const validMessage = document.getElementById("validMessage");
const btnValid = document.getElementById("btnValid");

const first = document.getElementById("first-name");
const firstError = document.getElementById("first-name-error");
const last = document.getElementById("last-name")
const lastError = document.getElementById("last-name-error");
const email = document.getElementById("email");
const emailError = document.getElementById("email-error");
const message = document.getElementById("message");
const messageError = document.getElementById("message-error");

modalBtn.addEventListener("click", displayModal);
closeBtn.addEventListener("click", closeModal);
btnValid.addEventListener('click', closeModal)

form.addEventListener('submit', (e) => { 
  onSubmit(e);
})

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal();
  }
});

//  Ajouter validation ou messages d'erreur #3 
function onSubmit(e) {
  
  //debugger;
  let validEmail = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;
  let isValid = true;

  if (first.value === '' || first.value.length < 2) { // Caractère absent ou inferieur à 2

    firstError.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
    firstError.style.fontSize = "14px";
    firstError.style.color = "white";
    firstError.style.background = "red";
    isValid = false;
  }
  else {
    firstError.textContent = "";
    // Si nombre de caractères suffisant, pas de message d'erreur

  }
  if (last.value === '' || last.value.length < 2) { // Caractère absent ou inferieur à 2
    //Ajouter validation ou messages d'erreur
    lastError.textContent = "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
    lastError.style.fontSize = "14px";
    lastError.style.color = "white";
    lastError.style.background = "red";
    isValid = false;

  }
  else {
    lastError.textContent = "";
    // Si nombre de caractères suffisant, pas de message d'erreur

  }
  if (validEmail.test(email.value)) {
    emailError.textContent = " ";//  Pas de message d'erreur
  }
  else {
    // If the field is empty,
    // display the following error message.
    emailError.textContent = "Vous devez renseigner une adresse mail.";
    emailError.style.fontSize = "14px";
    emailError.style.color = "white";
    emailError.style.background = "red";
    isValid = false;

  }
  if (message.value === '' || message.value.length < 2) { // Caractère absent ou inferieur à 2

    messageError.textContent = "Veuillez écrire votre message.";
    messageError.style.fontSize = "14px";
    messageError.style.color = "white";
    messageError.style.background = "red";
    isValid = false;
  }
  else {
    messageError.textContent = "";
    // Si nombre de caractères suffisant, pas de message d'erreur
  }

  
  //Ajouter confirmation quand envoi réussi #4
  if (isValid) {
    e.preventDefault();
    const myFormData = new FormData(e.target);
    const formDataObj = Object.fromEntries(myFormData.entries());
    console.log(formDataObj);
    form.reset();
    finishForm();
  }

}


function displayModal() {

  contactModal.style.display = "block";
}

function closeModal() {

  contactModal.style.display = "none";
  form.style.display = "block";
  formFinised.style.display = "none";
  
}

const finishForm = () => {
  form.style.display = "none";
  formFinised.style.display = "flex";
  validMessage.innerHTML = "Votre message à bien été envoyé";
}
