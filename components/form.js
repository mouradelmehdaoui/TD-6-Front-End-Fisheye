const formContact = () => {

  // algo pour permettre chargement de cette page en dernier des fichiers .js
  var script = document.createElement('script');
  script.src = "../scripts/utils/contactForm.js";
  script.async = true;
  document.head.appendChild(script);

  formContainer = document.getElementById("form");

  formContainer.innerHTML =
    ` 
          <div
            class="formData">
            <label for="first">Prénom</label><br>
            <input
              type="text"
              id="first"
              name="first"
              minlength="2"
              required
              aria-labelledby="first"
            >  <span id="error_first"></span><br>
          </div>
          <div
            class="formData">
            <label for="last">Nom</label><br>
            <input
              type="text"
              id="last"
              name="last"
              minlength="2"
              required
              aria-labelledby="last"
            ><span id="error_last"></span><br>
          </div>
          <div class="formData">
            <label for="email">E-mail</label><br>
            <input
              type="email"
              id="email"
              name="email"
              required 
              aria-labelledby="email"
            ><span id="error_email"></span><br>
          </div>
          <div
            class="formData">
            <label for="message">Votre message</label><br>
            <input
              type="text"
              id="message"
              name="message"
              required
              aria-labelledby="message"
            ><span id="error_message"></span><br>
          </div>
          <button class="modal_btn valid_btn" aria-hidden="true" aria-label="Send">Envoyer</button>
    </div>`
}
