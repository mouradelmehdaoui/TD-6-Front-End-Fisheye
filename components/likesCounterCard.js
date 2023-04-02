const likesCounterCard = (price, medias) => {

    const totalyLikes = medias.reduce(function (accumulator, media) {
        return accumulator + media.likes;
      }, 0);

    console.log(totalyLikes);
    
    const likesCounterCard = document.getElementById("total-card");
    likesCounterCard.innerHTML =
    `
    <span class="total-count">${totalyLikes}</span>
    <i class="fa-solid fa-heart"></i>
    <span class="total-price"> ${price} / jour</span>
    `
}