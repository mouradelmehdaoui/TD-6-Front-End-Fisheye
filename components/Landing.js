
const landing = () => {


  landingContainer = document.querySelector(".landing-container");

  landingContainer.innerHTML =
    `  
    <div class="drop-down">
    <label for="select" class="drop-down__title">Trier par:</label>
    <nav>
    <ul class="drop-down__closed closed">
    <div class="drop-down__icon-container">
            <i class="fa-solid fa-chevron-down dropdown__icon" tabindex="0"></i>
            </div>
      <li class="nav-button">Popularité</li>
      <li id="popularity"><a href="#" tabindex="0">Popularité</a></li>
      <li id="date"><a href="#" tabindex="0">Date</a></li>
      <li id="title"><a href="#" tabindex="0">Titre</a></li>
    </ul>
  </nav>
  </div>
  `
  const dropDwonClosed = document.querySelector('.drop-down__closed')

  const toggleLanding = () =>{
  
    dropDwonClosed.classList.toggle('closed')
  }
  document.querySelector('.drop-down__icon-container').addEventListener('click', toggleLanding)
  dropDwonClosed.addEventListener('keydown', (event) => {
        
    if (event.key === 'Enter' || event.key === 'Escape') {
      toggleLanding()
    }
}); 


}



