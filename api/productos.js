import model from '../model/productos-mongodb.js'

// -------------------- API READ ALL --------------------

const obtenerProductos = async () => {
    let products = await model.readProducts()
    
    return products
}

// -------------------- API READ ONE --------------------

const obtenerProducto = async id => {
    let product = await model.readProduct(id)
    
    return product
}

// -------------------- API CREATE --------------------

const guardarProducto = async product => {
    let savedProduct = await model.createProduct(product)

    return savedProduct
}

// -------------------- API UPDATE --------------------

const actualizarProducto = async (id, product) => {
    let updatedProduct = await model.updateProduct(id,product)

    return updatedProduct
}

// -------------------- API DELETE --------------------

const borrarProducto = async id => {
    let deletedProduct = await model.deleteProduct(id)

    return deletedProduct
}

export default {
    obtenerProductos,
    obtenerProducto,
    guardarProducto,
    actualizarProducto,
    borrarProducto
}

