import mongoose from 'mongoose'
import DB_Mongo from './DB_Mongo.js'

// ------------ ESQUEMA DEL DOCUMENTO CARRITO --------------

const cartSchema = mongoose.Schema({
    cart : Array
})

// --------- MODELO DE ALMACENAMIENTO EN COLECCIÓN -----------

const CartModel = mongoose.model('carritos', cartSchema)


// -------------------- CREATE --------------------

const createCart = async cart => {
    if(!DB_Mongo.okConnection) return {}

    else{
        try {
            const saveCart = new CartModel({cart:cart})
            await saveCart.save()
    
            return cart
        }
        catch(error){
            console.log(`Error en createCart: ${error.message}`)
            return {}
        }
    }
}

export default {
    createCart,
}