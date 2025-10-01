const Produto = require("../schema/Produto");

exports.createProduto = async (req, res) => {
    try {
        const p = await Produto.create(req.body);
        res.status(201).json(p);
    } catch (err) {
        res.status(400).json({ erro: err.message });
    }
};

exports.produtoFindById = async (req, res) => {
    try {
        const p = await Produto.findById(req.params.id);
        if (!p) {
            return res.status(404).json({ error: "Produto não encontrado" });
        }
        res.status(200).json(p);
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};

exports.produtoFindAll = async (req, res) => {
    try {
        const produtos = await Produto.find();
        res.status(200).json(produtos);
    } catch (err) {
        res.status(500).json({ erro: err.message });
    }
};