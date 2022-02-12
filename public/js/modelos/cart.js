// ****************************************************************************************
//                                Clase para ABM desde Mockapi.io                         * 
// ****************************************************************************************

// ABM de los productos de manera local

class CartModel {
    cart = []

    // Función que evita llamar directamente a los datos. Por seguridad se usa esta función cargándolos como argumentos
    initcart(products){
        this.cart = products
    }

    get(id) {
        if(id) {
            let product = this.cart.find(product => product.id == id)
            return product
        } 
        else {
            return this.cart
        }
    }

    // Función que determina si el producto seleccionado ya existe en el carrito. Cuestión de no repetirlo y de simplemente sumarle una unidad al mismo item.
    // Si el producto ya existe en el carrito, el arrow function devuelve un array distinto de 0, si el producto es nuevo devuelve un array vacío
    existingProduct(product){
        return this.cart.filter(prod => prod.id == product.id).length
    }

    // Función que retorna el producto especificado. Se la llama desde el controller para determinar cual es el producto que ya existe en el carrito y al que
    // hay que sumarle una unidad
    getProduct(product) {
        return this.cart.find(prod => prod.id == product.id)
    }

    post(product) {
        this.cart.push(product)
    }

    put(id, product) {
        let index = this.cart.findIndex(prod => prod.id == id)
        this.cart.splice(index, 1, product)
    }

    delete(id) {
        let index = this.cart.findIndex(prod => prod.id == id)
        this.cart.splice(index, 1)
    }
}

const cartModel = new CartModel()