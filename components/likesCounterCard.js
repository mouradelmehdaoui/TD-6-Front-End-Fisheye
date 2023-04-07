const likesCounterCard = (price, medias) => {
  const likesCounterCard = document.getElementById("total-card");

  // reduc additionner l'ensemble des likes des medias d'un photographe
  let totalyLikes = medias.reduce(function (accumulator, media) {
    return accumulator + media.likes;
  }, 0);

  likesCounterCard.innerHTML =
    `
    <span class="total-count">${totalyLikes}</span>
    <i class="fa-solid fa-heart"></i>
    <span class="total-price"> ${price} / jour</span>
    `
  const like = document.querySelectorAll('.images__post-like-button')
  const totalPrice = document.querySelector('.total-count')


  const checkClassList = (contains, el, index) => {
    if (contains) {
      totalyLikes--
      el.classList.remove("active-like")
      totalPrice.textContent = totalyLikes;
      el.innerHTML = `${--medias[index].likes} <i
      class="fa-regular fa-heart"></i>`
    } else {
      totalyLikes++
      el.classList.add("active-like")
      totalPrice.textContent = totalyLikes;
      el.innerHTML = `${++medias[index].likes} <i
      class="fa-solid fa-heart"></i>`
    }
  }

  like.forEach((el, index) => {
    el.addEventListener("click", (event) => {
      event.preventDefault();
      const likeAlreadyBeenPressed = el.classList.contains("active-like")
      checkClassList(likeAlreadyBeenPressed, el, index)
    });
  });

}