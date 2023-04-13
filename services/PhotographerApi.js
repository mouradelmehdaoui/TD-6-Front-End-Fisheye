
class Api {

    /**
   * 
   * @param {string} url 
   */
    constructor(url) {
        this._url = url
    }

    async getAll() {

        console.log('je suis service phographer Api');
        return fetch(this._url)
            .then(res => res.json())
            .then(res => 
                ({
                photographers: [...res.photographers],
                medias: [...res.media]
            })
            )
            .catch(err => console.log('Api ne respond pas', err))
    }
}

class PhotographerApi extends Api {

    constructor(url) {
        super(url)
    }

    async getAllPhotographers() {
        return await this.getAll()
    }

    async getPhotographersById(id) {
        const { photographers } = await this.getAllPhotographers()
        if (id == 0) {
            return of(this.getDefaultHPhotographer())
        }
        return photographers.find(user => user.id == id)
    }

    getDefaultHPhotographer() {

        return {
            name: '',
            id: 0,
            city: '',
            country: '',
            tagline: '',
            price: '',
            portrait: ''
        }
    }

}

class MediasApi extends Api {

    constructor(url) {
        super(url)
    }

    async getAllMedias() {
        const {medias} = await this.getAll()
        return medias;
    }

    async getMediasById(id) {
        const  medias  = await this.getAllMedias()

        if (id == 0) {
            return of(this.getDefaultMedias())
        }
        return medias.filter(media => media.photographerId == id)
    }

    getDefaultMedias() {

        return {
            name: '',
            id: 0,
            city: '',
            country: '',
            tagline: '',
            price: '',
            portrait: ''
        }
    }

    sortMedias(mediasPhotographer, postsContainer, photographerName) {

        const elements = document.querySelectorAll('ul > li');
        const short = document.querySelector('.nav-button')
        const hideDropdown = document.querySelector('.drop-down__closed')

          elements.forEach( landing => {
            landing.addEventListener('click', (e) => {
                
                let sortOption = e.target.innerText
            let sortedArray = [];
            switch (sortOption.toLowerCase()) {
              case "titre": { 
                
                short.textContent = sortOption
                hideDropdown.classList.add('closed')
                
                sortedArray = mediasPhotographer.sort((valueA, valueB) => {
                  return valueA.title.localeCompare(valueB.title);
                });
                break;
              }
              case "popularité": {

                short.textContent = sortOption
                hideDropdown.classList.add('closed')
                sortedArray = mediasPhotographer.sort((valueA, valueB) => {
                  return valueB.likes - valueA.likes;
                });
                break;
              }
              case "date": {

                short.textContent = sortOption
                hideDropdown.classList.add('closed')
                sortedArray = mediasPhotographer.sort((valueA, valueB) => {
                  return valueA.date - valueB.date;
                });
                break;
              }
            }
            
            PhotographerApp.createCard(mediasPhotographer, postsContainer, photographerName);
            });
          });   

    }

}






