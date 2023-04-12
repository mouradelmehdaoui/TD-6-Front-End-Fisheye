
const landing = () => {

  landingContainer = document.querySelector(".landing-container");

  landingContainer.innerHTML =
    `<div class="sort-container">
    <span class="sort-text" aria-label="Bouton de tri" aria-haspopup="listbox" aria-labelledby="listboxlabel">Trié par:</span>
    <select class="sort-dropdown" aria-label="Menu de tri" aria-haspopup="listbox" aria-labelledby="listboxlabel">
      <option value="date" aria-label="Trier par date"><span href="#">Date</span></option>
      <option value="title" aria-label="Trier par titre"><a href="#">Titre</a></option>
      <option value="popularity" aria-label="Trier par popularité"><a href="#">Popularité</a></option>
    </select>
  </div>`

    // Bind Click event to the drop down navigation button
    // document.querySelector('.nav-button').addEventListener('click', function() {
    //   /*  Toggle the CSS closed class which reduces the height of the UL thus 
    //       hiding all LI apart from the first */
    //   this.parentNode.parentNode.classList.toggle('closed')
    // }, false);

}



