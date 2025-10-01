const mongoose = require("mongoose");

const itemProdutoSchema = new mongoose.Schema({
    produto : {type: mongoose.Schema.ObjectId, ref: "Produto", required: true},
    quatidade: {type: Number, required: true}
})

module.exports = mongoose.model("ItemProduto", itemProdutoSchema);