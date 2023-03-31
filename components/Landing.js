
const Landing = () => {

  landingContainer = document.querySelector(".landing-container");

  landingContainer.innerHTML =
    `      <div class="images__sorter">
        <label for="select" class="label">Trier par:</label>
        <div class="images__select-container">

          <div class="dropdown-menu__icon-container">
            <i class="fa-solid fa-chevron-down dropdown-menu__icon"></i>
          </div>
          <!--      Will be displayed on widescreen devices      -->
          <button class="dropdown-menu__sort-button" type="button" role="listbox" aria-expanded="false"
            aria-level="Bouton pour ouvrir le menu déroulant" role="button">
            Popularité
          </button>
          <div class="dropdown-menu hide">
            <ul class="dropdown-menu__list" tabindex="0">
              <li class="dropdown-menu__list-item" tabindex="0">Popularité</li>
              <li class="dropdown-menu__list-item" tabindex="0">Date</li>
              <li class="dropdown-menu__list-item" tabindex="0">Titre</li>
            </ul>
          </div>


          <!-- Template for the dropdown menu -->
          <template>

            <div class="dropdown-menu">
              <ul class="dropdown-menu__list">
                <li class="dropdown-menu__list-item">Popularité</li>
                <li class="dropdown-menu__list-item">Date</li>
                <li class="dropdown-menu__list-item">Titre</li>
              </ul>
            </div>
          </template>

        </div>

      </div>`
}