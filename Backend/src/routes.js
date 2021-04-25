const express = require('express');
const routes = express.Router();

//GET => Usado somente para buscar informação (no maximo, mandar alguma query) - read
//POST => Usado para enviar dados de formularios - create
//PUT => Usado para atualização, recebe parametro tanto query, - update
//DELETE => Usado para exclusão... parametro são via query - delete

routes.get('/', (req, res) =>{
    var id = req.query.id;
    return res.json({mensagem : 'pagina principal'})
});

routes.get('/produtos', (req, res) =>{
    return res.json({mensagem : "Rota de todos os Produtos"})
});

routes.post('/produtos', (req, res) =>{
    var produto = req.body.produto;
    return res.json({mensagem : 'Add product ' + produto.nome})
}); 

routes.put('/produtos', (req, res) =>{
    var id = req.query.id;
    var produto = req.body.produto;
    return res.json({mensagem : 'Atualizar o produto ' + id + ' com os dados do post ' + produto.nome})
}); 

routes.delete('/produtos', (req, res) =>{
    var id = req.query.id;
    var produto = req.body.produto;
    return res.json({mensagem : 'Deleta o produto ' + id})
}); 

routes.get('/cliente', (req, res) =>{
    return res.json({mensagem : "Rota de todos os Clientes"})
});

routes.post('/cliente', (req, res) =>{
    var cliente = req.body.cliente;
    return res.json({mensagem : 'Add cliente ' + cliente.nome})
}); 

routes.put('/cliente', (req, res) =>{
    var id = req.query.id;
    var cliente = req.body.cliente;
    return res.json({mensagem : 'Atualizar o cliente ' + id + ' com os dados do post ' + cliente.nome})
}); 

routes.delete('/cliente', (req, res) =>{
    var id = req.query.id;
    var cliente = req.body.cliente;
    return res.json({mensagem : 'Deleta o cliente ' + id + ', ' + cliente.nome})
}); 

routes.get('/pedido', (req, res) =>{
    return res.json({mensagem : "Rota de todos os pedidos"})
});

routes.post('/pedido', (req, res) =>{
    var id = req.query.id;
    var pedido = req.body.pedido;
    return res.json({mensagem : 'Add pedido ' + id})
}); 

routes.put('/pedido', (req, res) =>{
    var id = req.query.id;
    var pedido = req.body.pedido;
    return res.json({mensagem : 'Atualizar o pedido ' + id + ' com os dados do post ' + pedido.nome})
}); 

routes.delete('/pedido', (req, res) =>{
    var id = req.query.id;
    var pedido = req.body.pedido;
    return res.json({mensagem : 'Deleta o pedido ' + id + ', ' + pedido.nome})
}); 

module.exports = routes;