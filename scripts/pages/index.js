
class App {
    constructor() {
        this.$cardsContainer = document.querySelector(".photographer_section");
        this.PhotographerApi = new PhotographerApi('./api/photographers.json')
    }

    async main() {
        // Ici je récupère mes films de mon fichier old-movie-data.json
        const {photographers} = await this.PhotographerApi.getAllPhotographers()
        this.$cardsContainer.innerHTML = new PhotographerCard(photographers).createCards();
    }
}

const app = new App()
app.main()




