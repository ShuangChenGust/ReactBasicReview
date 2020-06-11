const mongoose = require ('mongoose')
const config = require('config')
const db = config.get('mongoURI')

//require a promise
const connectDB = async () =>
{
    try{
        await mongoose.connect(db, { useNewURrlParser: true})
        console.log("MongoDB connected...")
    }catch(err){
        console.error(err.message);
        //exit the process with failure
        process.exit(1);
    }
}

module.exports = connectDB;