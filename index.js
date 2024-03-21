
// ---------- SERVIDOR ---------- SERVIDOR ---------- SERVIDOR ---------- //

const express = require('express');
const { createServer } = require('node:http');
const { join } = require('node:path');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, '/tela_login.html'));
});

app.get('/tela_registro.html', (req, res) => {
  res.sendFile(join(__dirname, '/tela_registro.html'));
});

io.on('connection', (socket) => {
  console.log('a user connected');
  
  async function connect() {
        if (global.connection)
        return global.connection.connect();
      
      const { Pool } = require('pg');
      const pool = new Pool({
            connectionString: 'postgres://usr_dev:usr_dev@172.32.1.23:5432/dev'
        });
      
        //apenas testando a conexão
        const client = await pool.connect();
        console.log("Conectado ao PostgresSQL!");
        
        //guardando para usar sempre o mesmo
        global.connection = pool;
        return pool.connect();
      }
      
    connect()
      
      // // // ---------- TELA DE REGISTRO ---------- TELA DE REGISTRO ---------- TELA DE REGISTRO ---------- // // //
      
    function registrar() {
    
      socket.on('nome', (nome) => {
        console.log('Nome: ' + nome);
        var nome1 = nome
        
      socket.on('email', (email) => {
        console.log('Email: ' + email);
        var email1 = email
          
      socket.on('senha', (senha) => {
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

    registrar()

     // // // ---------- TELA DE LOGIN ---------- TELA DE LOGIN ---------- TELA DE LOGIN ---------- // // //
     

    function login() {
      
      socket.on('email', (iemail) => {
      console.log('email: ' + iemail);
      var input_email = iemail
         
      socket.on('senha', (isenha) => {
      console.log('senha: ' + isenha);
      var input_senha = isenha
           
    async function select1() {

      const client = await connect();
      const res = await client.query('SELECT * FROM testes_praticos.login');
      return res.rows;
      }

      select1()
       
      // // // ---------- VALIDAÇÃO ---------- VALIDAÇÃO ---------- VALIDAÇÃO ---------- // // //

      async function validacao () {
        const client = await connect();
        const email = input_email;
        const senha = input_senha;
        const consultaSQL = await client.query (`SELECT * FROM testes_praticos.login WHERE email = '${email}' and senha = '${senha}' `);
        if (consultaSQL.rowCount > 0){
          console.log('Acesso permitido!');
          
        }
        else {
          console.log('Acesso negado!');
          
        }
        }  
      
        validacao()
      



      });
    });
  }

    login()

});

      


server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});
