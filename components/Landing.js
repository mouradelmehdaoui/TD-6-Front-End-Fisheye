
const landing = () => {


  landingContainer = document.querySelector(".landing-container");

  landingContainer.innerHTML =
    `  
    <div class="drop-down">
    <label for="select" class="drop-down__title">Trier par:</label>
    <nav>
    <ul class="drop-down__closed closed">
    <div class="drop-down__icon-container">
            <i class="fa-solid fa-chevron-down dropdown__icon"></i>
            </div>
      <li id="short"><a href="#" class="nav-button"></a></li>
      <li id="popularity"><a href="#">Popularité</a></li>
      <li id="date"><a href="#">Date</a></li>
      <li id="title"><a href="#">Titre</a></li>
    </ul>
  </nav>
  </div>
  `
  const dropDwonClosed = document.querySelector('.drop-down__closed')

  const toggleLanding = () =>{
  
    dropDwonClosed.classList.toggle('closed')
  }
  document.querySelector('.drop-down__icon-container').addEventListener('click', toggleLanding)

}



