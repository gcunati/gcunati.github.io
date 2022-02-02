class CartController{

    // Esto restaura los datos del carrito (si los hay) ni bien se vuelve a abrir el navegador después de haberse cerrado, a través del LocalStorage
    constructor(){
        try{
            cartModel.initcart(JSON.parse(localStorage.getItem('Carrito')) || [])
        }
        catch{
            cartModel.initcart([])
            localStorage.setItem('Carrito', cartModel.get())
        }
    }

    addToCart(product) {

        if(!cartModel.existingProduct(product)){
            product.quant = 1
            cartModel.post(product)
        } else {
            let productFromCart = cartModel.getProduct(product)
            productFromCart.quant ++
        }

        localStorage.setItem('Carrito', JSON.stringify(cartModel.get()))
    }

    async deleteFromCart(id){
        cartModel.delete(id)
        localStorage.setItem('Carrito', JSON.stringify(cartModel.get()))

        await renderCart(cartModel.get())
    }

    async sendCart(){
        let cartContainer = document.querySelector('.cart-section')
        let cartBlurBackground = document.querySelector('.cart-container')

        await cartService.postCart(cartModel.get())

        // Restaura a cero el carrito una vez enviado al Backend (de forma local y en LocalStorage)
        cartModel.initcart([])
        localStorage.setItem('Carrito', cartModel.get())
        cartContainer.innerHTML ='<h2 class ="cart__send-message">Tu pedido fue enviado</h2>'

        // Cierra la ventana del carrito 1 segundo después de haber sido enviado
        setTimeout(() => {
            cartContainer.classList.remove('cart-section--visible')
            cartBlurBackground.classList.remove('cart-container--visible')
            showCart = false
        }, 1000);
    }
}

const cartController = new CartController()