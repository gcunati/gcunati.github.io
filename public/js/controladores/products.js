class ProductsController {

    async getProducts() {
        let products = await productsService.getProducts()
        return products
    }

    async postProduct(product) {
        //Post del producto al Backend
        let postedProduct = await productsService.postProduct(product)

        //Post del producto de forma local
        productsModel.post(postedProduct)

        //Actualiza vista
        renderProds(productsModel.get())
        
        return postedProduct
    }


    async putProduct(id) {

        //Trae los datos del formulario
        let product = readProduct()
        cleanForm()

        //Actualiza el backend
        let putProduct = await productsService.putProduct(id,product)

        //Actualiza el modelo local
        productsModel.put(id, putProduct)

        //Imprime los cambios en vista
        renderProds(productsModel.get())

        return postedProduct
    }


    async deleteProduct(id) {

        //Elimina el producto del backend
        let deletedProduct = await productsService.deleteProduct(id)

        //Elimina el producto localmente
        productsModel.delete(id)

        //Imprime los cambios en vista
        renderProds(productsModel.get())

        return deletedProduct
    }
}

const productsController = new ProductsController()