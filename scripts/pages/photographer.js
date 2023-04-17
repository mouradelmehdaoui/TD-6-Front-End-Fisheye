class PhotographerApp {
  constructor() {
    this.$cardsContainer = document.querySelector(".photograph-header");
    this.PhotographerApi = new PhotographerApi('./api/photographers.json')
    this.MediasApi = new MediasApi('./api/photographers.json')
    
  }

  async main() {

    window.addEventListener('load', async () => {

      const params = (new URL(document.location)).searchParams;
      const id = parseInt(params.get('id'));
      const photographer = await this.PhotographerApi.getPhotographersById(id);
      const medias = await this.MediasApi.getMediasById(id);
      const photographerFullName = photographer.name.split(' ');
      const photographerName = photographerFullName.shift()


      this.$cardsContainer.innerHTML = new PhotographerCard(photographer).createProfile()
      const postsContainer = document.querySelector(".images")

      PhotographerApp.createCard(medias, postsContainer, photographerName);
      this.MediasApi.sortMedias(medias, postsContainer, photographerName)
      
      this.createCarrousel(medias, photographerName)

      formContact(photographer)
      likesCounterCard(photographer.price, medias)
      this.MediasApi.setLikes(photographer.price, medias)
      
    })

    landing()

  }

  //Static method 
  static createCard(dataObject, container, photographerName) {
    container.innerHTML = new MediasCard(
      dataObject, photographerName
    ).createPosts();
  }

  createCarrousel(medias,photographerName) {
    const carrousel = new Carrousel(medias, photographerName)
    carrousel.init()
    this.MediasApi.setCarrousel(carrousel)
    
  }

}

const photographer = new PhotographerApp()
photographer.main()


