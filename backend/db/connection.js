const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("conectado ao MongoDB");
    }catch (err){
        console.error("Erro ao conectar no MongoDB", err)
        process.exit(1);
    }
    
}

module.exports = connectDB;