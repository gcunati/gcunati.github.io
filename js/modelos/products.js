// ****************************************************************************************
//                                Clase para ABM desde Mockapi.io                         * 
// ****************************************************************************************

// ABM de los productos de manera local

class ProductsModel {
    products = []

    get() {
        return this.products
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