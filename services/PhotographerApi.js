
class Api {

    /**
   * 
   * @param {string} url 
   */
    constructor(url) {
        this._url = url
    }

    async getAll() {
        return fetch(this._url)
            .then(res => res.json())
            .then(res => ({
                photographers: [...res.photographers],
                medias: [...res.media]
            }))
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
        return photographers.filter(user => user.id == id)
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





