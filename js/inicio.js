// Construcción de Array de Cards. Append al container

cards = [
    new Card ('Samsung', 'css/img/note20ultra.jpg', ''),
    new Card ('iPhone', 'css/img/iphone12pro.jpg', ''),
    new Card ('Xiaomi', 'css/img/mi11ultra.jpg', ''),
    new Card ('Huawei', 'css/img/mate40pro.jpg', ''),
    new Card ('Motorola', 'css/img/edge20pro.jpg', '')
]

console.log(cards)

function initInicio() {
    let cardsContainer = document.querySelector ('.cards-container')

    for (card of cards) {
        card.appendTo(cardsContainer)
    }
}
