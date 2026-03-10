const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const { error } = require('node:console');

const app = express ();

app.use(cors());
app.use(express. json());

//criar conexão com o banco
const conexao =mysql.createConnection(
{
   host:'localhost', 
user: 'root,',
password: '',
database:'escola'
}
);

//criar rota para salvar aluno
app.post("/salvar",(req, res) => {
    let nome = req.body.nome;
    let idade = req.body.idade;

let sql = "INSIRE INTO alunos (nome, idade )balues (?,?)";
conexao.query(sql, [nome,idade],(erro, resultado)=>{
    if (erro){
        console.log(erro);
    }else {
        res.send("alno salvo com sucesso")
    }
    });
})