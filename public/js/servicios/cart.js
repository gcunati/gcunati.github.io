// ****************************************************************************************
//                        Clase para enviar Carrito a Mockapi.io                          * 
// ****************************************************************************************

// Llama al cliente https.js con los parámetros según correspondan

class CartService {
    
    url_cart = '/api/carrito/'

    // ******************** POST ********************

    async postCart(cart) {
        let postedCart = await http.post(this.url_cart, cart)
        return postedCart
    }
}

const cartService = new CartService()