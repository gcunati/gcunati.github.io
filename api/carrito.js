import Cartmodel from '../model/carrito-mongodb.js'


// -------------------- API CREATE --------------------

const guardarCarrito = async cart => {
    let savedCart = await Cartmodel.createCart(cart)

    return savedCart
}


export default {
    guardarCarrito,
}
