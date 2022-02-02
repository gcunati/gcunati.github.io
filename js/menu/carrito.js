let showCart = false

// ****************************************************************************************
//                       HANDLEBARS PARA tRAER EL CONTENIDO DEL CARRITO                   *
// ****************************************************************************************

// Los await son para garantizar que el contenido del carrito se cargue previo a que se le agregue la clase de visible

async function renderCart(cart) {

    let plantilla = await fetch('vistas/carrito.hbs').then(r => r.text())

    var template = Handlebars.compile(plantilla)

    let html = template({ cart: cart })

    document.querySelector('.cart-section').innerHTML = html
}

function initCarrito() {
    let btnCart = document.querySelector('.search-bar__carrito-container')
    let cartInyection = document.querySelector('.cart-section')
    let cartBlurBackground = document.querySelector('.cart-container')
    let btnCartClose = document.querySelector('.cart-section__close')

    btnCart.addEventListener('click', async () => {
        showCart = !showCart
        if (showCart) {
            await renderCart(cartModel.get())
            cartInyection.classList.add('cart-section--visible')
            cartBlurBackground.classList.add('cart-container--visible')
        } else {
            cartInyection.classList.remove('cart-section--visible')
            cartBlurBackground.classList.remove('cart-container--visible')
        }
    })

    btnCartClose.addEventListener('click', () =>{
        cartInyection.classList.remove('cart-section--visible')
        cartBlurBackground.classList.remove('cart-container--visible')
        showCart = false
    })
}

initCarrito()