class PhotographerApp {
    constructor() {
        this.$cardsContainer = document.querySelector(".photograph-header");
        this.PhotographerApi = new PhotographerApi('./api/photographers.json')
    }

    async main() {

        window.addEventListener('load', async () => {
            const params = (new URL(document.location)).searchParams;
            const id = params.get('id');
            const photographer = await this.PhotographerApi.getPhotographersById(id);
            this.$cardsContainer.innerHTML = new PhotographerCard(photographer).createProfile()
        })
    }
}

const photographer = new PhotographerApp()
photographer.main()




