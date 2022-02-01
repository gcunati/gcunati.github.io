// ****************************************************************************************
//                                Clase para ABM desde Mockapi.io                         * 
// ****************************************************************************************

// Llama al cliente https.js con los parámetros según correspondan

class ProductsService {
    
    url_products = 'https://61f8b4ba783c1d0017c4472c.mockapi.io/productos/'

    // ******************** GET ********************

    async getProducts() {
        let products = await http.get(this.url_products)
        return products
    }

    // ******************** POST ********************

    async postProduct(product) {
        let postedProduct = await http.post(this.url_products, product)
        return postedProduct
    }

    // ******************** PUT ********************

    async putProduct(id, product) {
        let putProduct = await http.put(this.url_products, id, product)
        return putProduct
    }

    // ******************** DELETE ********************

    async deleteProduct(id) {
        let deletedProduct = await http.delete(this.url_products, id)
        return deletedProduct
    }
}

const productsService = new ProductsService()