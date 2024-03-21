const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server);

function registrar() {
    
    io.on('nome', (nome) => {
        console.log('Nome: ' + nome);
    var nome1 = nome
    
    io.on('email', (email) => {
        console.log('Email: ' + email);
        var email1 = email
        
        io.on('senha', (senha) => {
        console.log('Senha: ' + senha);
        var senha1 = senha
        
        async function insert1() {
            const client = await connect();
          const sql = 'INSERT INTO testes_praticos.login (nome,email,senha) VALUES ($1,$2,$3);';
          const values = [nome1, email1, senha1];
          return await client.query(sql, values);
        }
        insert1() 
        });
    });
});

}

module.exports = {registrar}