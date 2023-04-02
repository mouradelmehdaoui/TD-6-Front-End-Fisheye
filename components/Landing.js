
const landing = () => {

  console.log('je suis ds landing');

  landingContainer = document.querySelector(".landing-container");

  landingContainer.innerHTML =
    `<div class="sort-container">
      <button class="sort-button" aria-label="Bouton de tri" aria-haspopup="listbox" aria-labelledby="listboxlabel">Trié par:</button>
      <select class="sort-dropdown" aria-label="Menu de tri" aria-haspopup="listbox" aria-labelledby="listboxlabel">
        <option value="date" aria-label="Trier par date">Date</option>
        <option value="title" aria-label="Trier par titre">Titre</option>
        <option value="popularity" aria-label="Trier par popularité">Popularité</option>
      </select>
    </div>`
}
