function Card (heading, image, description){
    this.heading = heading
    this.image = image
    this.description = description

    this.getCardContent = function () {
        var content =
        `
            <article class="card__article">
                <div class="card__image-container">
                    <img src=${this.image} class="card__image" alt=${this.heading}>
                </div>
                <div class="card__content">
                    <h2 class="card__heading">${this.heading}</h2>
                    <div class="card__description"></div>
                </div>
            </article>
        `
        return content 
    }

    this.getCard = function () {
        let nuevaCard = document.createElement('div')
        nuevaCard.classList.add('card')
        nuevaCard.innerHTML = this.getCardContent()

        return nuevaCard
    }

    this.appendTo = function (element) {
        element.appendChild (this.getCard())
    }
}