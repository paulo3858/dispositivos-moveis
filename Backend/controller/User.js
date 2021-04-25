const User = require('../model/User');

module.exports = {
    index(req, res){
        return res.json({mensagem : "Rota de todos os usuarios"})
    },

    async store(req, res){
        const {name, email, age, password} = req.body;
        const user = await User.create({name, email, age, password});
        return res.json(user);
    },

    update(req,res){
        var id = req.query.id;
        var produto = req.body.produto;
        return res.json({mensagem : 'Atualizar o produto ' + id + ' com os dados do post ' + produto.nome})
    },

    delete(req, res){
        var id = req.query.id;
        var produto = req.body.produto;
        return res.json({mensagem : 'Deleta o produto ' + id})
    }
}