const User = require('../model/User');

module.exports = {
    async index(req, res){ // busca todos os registros
        let users = await User.find()
        return res.json(users)
    },

    async store(req, res){ //grava o usuario no banco
        const {name, email, age, password} = req.body;
        const user = await User.create({name, email, age, password});
        return res.json(user);
    },

    async update(req,res){ //edita
        var id = req.query.id; //pega o id na url
        let user = await User.findById(id); //busca o user pelo id
        user.name = req.body.name;
        user.email = req.body.email;
        user.age = req.body.age;
        user.password = req.body.password;
        user = await User.update(user); //faz o update
        return res.json({mensagem : 'Atualizar o usuario ' + id + ' com os dados do post ' + user.name});
    },

    async delete(req, res){
        var id = req.query.id;
        let user = await User.findById(id);
        await User.deleteOne(user);
        return res.json({mensagem : 'Deleta o usuario ' + id});
    }
}