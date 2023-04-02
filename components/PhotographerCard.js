class PhotographerCard{
  constructor(cards) {
    this.cards = cards;
  }

  createCards() {
    let photographerTemplate = "";
    let photographerCards = "";

    for (let card of this.cards) {
      const { name, id, city, country, tagline, price, portrait } = card;
      photographerTemplate = `
      <article class="card">
          <a class="card-photograph-profile" title="Visiter la page de profil de ${name}?"
            href="./photographer.html?id=${id}" target="blank" role="link">
            <h1 class="card-image">
              <img src="./assets/photographers/${portrait}" alt="Photo de profil de: ${name}"
            </h1>
          </a>
          <div class="card-container">
          <h2>${name}</h2>
            <h3 class="card-location">${city}, ${country}</h3>
            <p class="card-slogan">${tagline}</p>
            <span class="card-invoice">${price}€/jour</span>
          </div>
        </article>
        `;

      photographerCards += photographerTemplate;
    }

    return photographerCards;
  }

  createProfile() {
    let profileTemplate = "";

    const { name, city, country, tagline, portrait } = this.cards;
    profileTemplate = `
         <section class="profile-container" >
        <div class="profile-card-container">
          <div class="profile-card">
            <h1 class="profile-name" >${name}</h1>
            <h2 class="profile-location" >${city}, ${country}</h2>
            <h3 class="profile-slogan" >${tagline}</h3>
          </div>
        </div>
        <div class="profile-contact">
        <div class="profile-img-container">
          <img src="./assets/photographers/${portrait}"
            alt="Photo de profil du compte de: ${name}" class="profile-image"" />
        </div>
      </section>
        `;

    return profileTemplate;
  }
}
