class MediasCard {
  constructor(cards, photographerName) {
    this.cards = cards;
    this.photographerName = photographerName;
  }

  createPosts() {

    let postTemplate = "";
    let postsCards = "";

    for (let card of this.cards) {
      const { id, photographerId, title, image, video, likes, date } = card;
      if (image) {
        //If the image is defined
        postTemplate = `
            <div class="images__post-container" data-post-id="${id}" data-photographers-id="${photographerId}"
                data-publishing-date="${date}" data-likes="${likes}" data-user-liked="false" data-title="${title}">
                <div class="images__post">
                  <a href="#" title="${title}" aria-label="Image nommée ${title}" role="link" tabindex="0">
                    <img class="images__image" src="../assets/images/medias/${this.photographerName}/${image}"
                      alt="'${title}' fait en ${new Date(date).getFullYear()}" />
                  </a>
                  <div class="images__post-text">
                    <p class="images__post-description" tabindex="0">${title}</p>
                    <button class="images__post-like-button" title="Mettre un like au post '${title}'?" aria-pressed="false"
                aria-label="Bouton pour liker la publication nommée '${title}'" tabindex="0">${likes} <i
                  class="fa-regular fa-heart"></i></button>
                  </div>
                </div>
              </div>
    
                    `;
      } else {
        postTemplate = `
                
               <div class="images__post-container" data-post-id="${id}" data-photographers-id="${photographerId}"
                data-publishing-date="${date}" data-likes="${likes}" data-user-liked="false" data-title="${title}">
    
                <div class="images__post">
    
                  <a href="#" title="${title}" aria-label="Video nommée ${title}" role="link" tabindex="0">
                    <video src="../assets/images/medias/${this.photographerName}/${video}" class="images__video">
                    </video>
                  </a>
                  <div class="images__post-text">
                    <p class="images__post-description" tabindex="0">${title}</p>
                    <button class="images__post-like-button" title="Mettre un like au post '${title}'?" aria-pressed="false"
                aria-label="Bouton pour liker la publication nommée '${title}'" tabindex="0" >${likes} <i
                  class="fa-regular fa-heart"></i></button>
                  </div>
    
                </div>
              </div>
    
                    `;
      }

      postsCards += postTemplate;
    }

    return postsCards;
  }


}
