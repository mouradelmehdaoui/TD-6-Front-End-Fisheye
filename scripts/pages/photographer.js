class PhotographerApp {
  constructor() {
    this.$cardsContainer = document.querySelector(".photograph-header");
    this.PhotographerApi = new PhotographerApi('./api/photographers.json')
    this.MediasApi = new MediasApi('./api/photographers.json')
  }

  async main() {

    console.log('je suis Main photographer.js');

    window.addEventListener('load', async () => {


      console.log('je suis addevent choper Id apres clicque photographer.js');

      const params = (new URL(document.location)).searchParams;
      const id = params.get('id');
      const photographer = await this.PhotographerApi.getPhotographersById(id);
      const medias = await this.MediasApi.getMediasById(id);
      const photographerFullName = photographer.name.split(' ');
      const photographerName = photographerFullName.shift()


      this.$cardsContainer.innerHTML = new PhotographerCard(photographer).createProfile()
      const postsContainer = document.querySelector(".images")

      PhotographerApp.createCard(medias, postsContainer, photographerName);

      this.MediasApi.sortMedias(medias, postsContainer, photographerName)


      formContact()
      likesCounterCard(photographer.price, medias)
 
    })

    landing()
   

  }

  //Static method 
  static createCard(dataObject, container, photographerName) {
    container.innerHTML = new MediasCard(
      dataObject, photographerName
    ).createPosts();
  }


}


const photographer = new PhotographerApp()

photographer.main()







