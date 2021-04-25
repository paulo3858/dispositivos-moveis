const express = require('express');
const routes = require('./routes');
const app = express(); //instanciando express (gerenciador de rotas)

app.use(express.json());
app.use(routes);

app.listen(3000); //definindo a porta