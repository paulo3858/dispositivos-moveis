const mongoose = require('mongoose');

const ClinicaSchema = new mongoose.Schema({
    nome : String,
    endereco : String,
    bairro : String,
    ibge : String,
    criado_em : Number,
    atualizado_em : Number,
    status : Boolean
});

// const AlunoSchema = new mongoose.Schema({
//     nome : String,
//     matricula : String,
//     endereco : String,
//     bairro : String,
//     email : String,
//     curso : String,
//     telefone : String,
//     criado_em : Number,
//     atualizado_em : Number,
//     status : Number
// })

async store(req, res){ 
    const {nome, matricula, endereco, bairro, email, curso, telefone, criado_em, atualizado_em, status} = req.body;
    const aluno = await Aluno.create({nome, matricula, endereco, bairro, email, curso, telefone, criado_em, atualizado_em, status});
    return res.json(aluno);
}

module.exports = mongoose.model('Clinica', ClinicaSchema);

