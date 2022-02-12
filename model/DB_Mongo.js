import mongoose from 'mongoose'

import config from '../config.js'

class DB_Mongo {
    static okConnection = false

    static genIdKey(obj) {

        if(Array.isArray(obj)){
            for (let i=0; i<obj.length; i++){
                obj[i].id = obj[i]._id
            }
        }
        else {
            obj.id = obj._id
        }

        return obj
    }

    static async connectDB() {

        try {
            if(!DB_Mongo.okConnection) {
                await mongoose.connect(config.STR_CNX, {
                    useNewUrlParser : true,
                    useUnifiedTopology : true
                })
                
                DB_Mongo.okConnection = true
                
                console.log('Base de datos conectada')
            }
        }
        catch(error){
            console.log(`MongoDB error: ${error.message}`)
        }
    }
}

export default DB_Mongo