import express from 'express'
import controller from '../controller/productos.js'

const router = express.Router()

// --------------------- RUTAS GET ---------------------

router.get('/:id?', controller.getProducts)

// --------------------- RUTAS POST ---------------------

router.post('/', controller.postProduct)

// --------------------- RUTAS POST ---------------------

router.put('/:id', controller.putProduct)

// --------------------- RUTAS POST ---------------------

router.delete('/:id', controller.deleteProduct)

export default router