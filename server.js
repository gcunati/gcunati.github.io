import express from 'express'
import routerProductos from './router/productos.js'
import routerCarrito from './router/carrito.js'

import config from './config.js'

//------------------ Conexión con MongoDB ------------------

import DB_Mongo from './model/DB_Mongo.js'
DB_Mongo.connectDB()

//---------------------------------------------------------

const app = express()

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/productos', routerProductos)
app.use('/api/carrito', routerCarrito)

//------------------ LISTEN DEL SERVIDOR ------------------

const PORT = config.PORT
const server = app.listen(PORT, () => console.log(`Servidor express escuchando en el puerto ${PORT}`))
server.on('error', error => console.log(`Error Servidor Express: ${error.message}`))