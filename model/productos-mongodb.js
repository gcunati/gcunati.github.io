import mongoose from 'mongoose'
import DB_Mongo from './DB_Mongo.js'

// ------------ ESQUEMA DEL DOCUMENTO PRODUCTO --------------

const productSchema = mongoose.Schema({
    name : String,
    price : Number,
    stock : Number,
    brand : String,
    range : String,
    photo : String,
    details : String,
    freeDelivery : Boolean,
})

// --------- MODELO DE ALMACENAMIENTO EN COLECCIÓN -----------

const ProductModel = mongoose.model('productos', productSchema)


// -------------------- CREATE --------------------

const createProduct = async product => {
    if(!DB_Mongo.okConnection) return {}

    else{
        try {
            const saveProduct = new ProductModel(product)
            await saveProduct.save()
    
            let products = await ProductModel.find({}).lean()
            let savedProduct = products[products.length-1]
    
            return DB_Mongo.genIdKey(savedProduct)
        }
        catch(error){
            console.log(`Error en createProduct: ${error.message}`)
            return {}
        }
    }
}

// -------------------- READ ONE --------------------

const readProduct = async id => {
    if(!DB_Mongo.okConnection) return {}
    
    else{
        try {
            let product = await ProductModel.findOne({_id:id}).lean()
            
            return DB_Mongo.genIdKey(product)
        }
        catch(error) {
            console.log(`Error en readProduct: ${error.message}`)
            return {}
        }
    }
}


// -------------------- READ ALL --------------------

const readProducts = async () => {
    if(!DB_Mongo.okConnection) return []
    
    else{   
        try {
            let products = await ProductModel.find({}).lean()
            
            return DB_Mongo.genIdKey(products)
        }
        catch(error) {
            console.log(`Error en readProducts: ${error.message}`)
            return []
        }
    }
}

// -------------------- UPDATE --------------------

const updateProduct = async (id, product) => {
    if(!DB_Mongo.okConnection) return {}
   
    else{
        try {
            await ProductModel.updateOne({_id:id},{$set:product})
    
            let updatedProduct = await ProductModel.findOne({_id:id}).lean()
            
            return DB_Mongo.genIdKey(updatedProduct)
        }
        catch(error) {
            console.log(`Error en updateProduct: ${error.message}`)
            return {}
        }
    }
}

// -------------------- DELETE --------------------

const deleteProduct = async id => {
    if(!DB_Mongo.okConnection) return {}
    
    else{
        try {
            await ProductModel.deleteOne({_id:id})
    
            let deletedProduct = await ProductModel.findOne({_id:id}).lean()
            
            return DB_Mongo.genIdKey(deletedProduct)
        }
        catch(error) {
            console.log(`Error en deleteProduct: ${error.message}`)
            return {}
        }
    }
}

export default {
    createProduct,
    readProduct,
    readProducts,
    updateProduct,
    deleteProduct
}