const mongoose = require("mongoose");

const tutorSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    sexo: {type: String, required: true}
})

module.exports = mongoose.model("Tutor", tutorSchema);