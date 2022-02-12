import api from '../api/carrito.js'

// -------------------- CONTROLLER POST --------------------

const postCart = async (req, res) => {
    let cart = req.body

    let savedCart = await api.guardarCarrito(cart)
    res.json(savedCart)
}


export default{
    postCart
}