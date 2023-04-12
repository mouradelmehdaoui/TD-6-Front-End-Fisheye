const formContact = (photographer) => {

  const { name } = photographer;
  // algo pour permettre chargement de cette page en dernier des fichiers .js
  var script = document.createElement('script');
  script.src = "../scripts/utils/contactForm.js";
  script.async = true;
  document.head.appendChild(script);

  formContainer = document.querySelector(".contact__modal");

  formContainer.innerHTML =
    ` 
    <div class="contact__modal-content">
      <div class="contact__title-button" tabindex="0">
        <h1 class="contact__title" id="photographers-name" tabindex="0">Contactez-moi <br />
          ${name}
        </h1>
        <button type="button" class="contact__button-close-dialog" tabindex="0"><i
            class="fa-solid fa-xmark contact__button-close-dialog-icon"
            aria-label="Bouton pour fermer la boîte de dialogue"></i></button>
      </div>
      <form action="photographer.html" method="dialog" class="contact__form" role="form">
        <fieldset class="contact__fieldset">
          <legend class="contact__legend">Veuillez remplir ces champs afin de contacter le photographe</legend>
          <section class="contact__fieldset-section" role="group">
            <label for="last-name" class="contact__label">Nom</label>
            <input type="text" name="name" id="last-name" class="contact__input" aria-invalid="false"
              aria-errormessage="lat-name-error" />
            <p class="contact__error-message hide" tabindex="0" id="last-name-error"></p>
          </section>
          <section class="contact__fieldset-section" role="group">
            <label for="first-name" class="contact__label">Prénom</label>
            <input type="text" name="name" id="first-name" class="contact__input" aria-invalid="false"
              aria-errormessage="first-name-error" />
            <p class="contact__error-message hide" tabindex="0" id="first-name-error"></p>
          </section>
          <section class="contact__fieldset-section" role="group">
            <label for="email" class="contact__label">Email</label>
            <input type="email" name="email" id="email" class="contact__input" aria-invalid="false"
              aria-errormessage="email-error" />
            <p class="contact__error-message hide" tabindex="0" id="email-error"></p>
          </section>
          <section class="contact__fieldset-section" role="group">
            <label for="message" class="contact__label">Votre message</label>
            <textarea name="message" name="message" id="message" cols="30" rows="10" class="contact__text-area"
              aria-errormessage="message-error"></textarea>
            <p class="contact__error-message hide" tabindex="0" id="message-error"></p>
          </section>
        </fieldset>
        <button type="submit" class="button contact__submit-button"
          aria-label="Bouton pour envoyer le message">Envoyer</button>
      </form>

      <div class="contact__validated-form hide">
        <h2 class="contact__validated-form-message">Message envoyé avec succès!</h2>
      </div>
    </div>`
}
