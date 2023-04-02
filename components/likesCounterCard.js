const likesCounterCard = (price, medias) => {
  const likesCounterCard = document.getElementById("total-card");

  console.log('je suis ds likesCount');
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

    like.forEach( el => {
        el.addEventListener("click", (e) => {
          e.preventDefault();
          totalyLikes++

          console.log(totalPrice);
          console.log(el);
          totalPrice.textContent = totalyLikes;
          el.innerText  = `${parseInt(e.target.innerText) + 1}`
        });
    });

}