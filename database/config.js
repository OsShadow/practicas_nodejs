const mongoose = require('mongoose');

const dbConnection = async() => {

    try {

        await mongoose.connect(process.env.MONGODB_ATLAS, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })

        console.log('Base de datos en linea');
        
    } catch (error) {
        throw new Error('Error en la base de datos');
        
    }

} 

module.exports = { 
    dbConnection
}