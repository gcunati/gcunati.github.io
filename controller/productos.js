import api from '../api/productos.js'

// -------------------- CONTROLLER GET --------------------

const getProducts = async (req, res) => {
    let id = req.params.id

    if(id) {
        let id = req.params.id

        let product = await api.obtenerProducto(id)
        res.json(product)
    }
    else {
        let products = await api.obtenerProductos()
        res.json(products)
    }
}

// -------------------- CONTROLLER POST --------------------

const postProduct = async (req, res) => {
    let product = req.body

    let savedProduct = await api.guardarProducto(product)
    res.json(savedProduct)
}

// -------------------- CONTROLLER PUT --------------------

const putProduct = async (req, res) => {
    let id = req.params.id
    let product = req.body

    let updatedProduct = await api.actualizarProducto(id,product)
    res.json(updatedProduct)
}

// -------------------- CONTROLLER DELETE --------------------

const deleteProduct = async (req, res) => {
    let id = req.params.id

    let deletedProduct = await api.borrarProducto(id)
    res.json(deletedProduct)
}

export default{
    getProducts,
    postProduct,
    putProduct,
    deleteProduct
}