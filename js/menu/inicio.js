// ****************************************************************************************
//                             HANDLEBARS PARA CREAR LAS CARDS                            *
// ****************************************************************************************

function renderCards(products) {

    fetch('vistas/inicio.hbs')
    .then(r => r.text())
    .then( plantilla => {
        var template = Handlebars.compile(plantilla);
        let html = template({ products: products });

        document.querySelector('.cards-container').innerHTML = html
    })
}

function addToCart(id) {
    
    let product = productsModel.get(id)

    cartController.addToCart(product)
}

async function initInicio() {

    productsModel.initproducts(await productsController.getProducts())
    renderCards(productsModel.get())
}
