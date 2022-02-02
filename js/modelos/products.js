// ****************************************************************************************
//                                Clase para ABM desde Mockapi.io                         * 
// ****************************************************************************************

// ABM de los productos de manera local

class ProductsModel {
    products = []

    // Función que evita llamar directamente a los datos. Por seguridad se usa esta función cargándolos como argumentos
    initproducts(products){
        this.products = products
    }

    get(id) {
        if(id) {
            let product = this.products.find(product => product.id == id)
            return product
        } 
        else {
            return this.products
        }
    }

    post(product) {
        this.products.push(product)
    }

    put(id, product) {
        let index = this.products.findIndex(prod => prod.id == id)
        this.products.splice(index, 1, product)
    }

    delete(id) {
        let index = this.products.findIndex(prod => prod.id == id)
        this.products.splice(index, 1)
    }
}

const productsModel = new ProductsModel()