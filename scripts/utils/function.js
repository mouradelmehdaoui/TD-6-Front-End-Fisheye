// déclaration variables DOM
const dropDown = document.querySelector(".dropdown-menu__icon-container");

// fonctions ecouteurs d'evenements
dropDown.addEventListener('click', mafonction, false);

function mafonction()
{
  alert("Cliqué!");
}

// trie par 