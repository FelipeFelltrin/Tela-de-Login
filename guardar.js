
// // ---------- SERVIDOR ---------- SERVIDOR ---------- SERVIDOR ---------- //

// const express = require('express');
// const { createServer } = require('node:http');
// const { join } = require('node:path');
// const { Server } = require('socket.io');

// const app = express();
// const server = createServer(app);
// const io = new Server(server);

// app.get('/', (req, res) => {
//   res.sendFile(join(__dirname, 'tela.html'));
// });

// io.on('connection', (socket) => {
//   console.log('a user connected');
  
//       socket.on('nome', (nome) => {
//         console.log('Nome: ' + nome);
//       });
      
//       socket.on('email', (email) => {
//         console.log('Email: ' + email);
//       });
      
//       socket.on('senha', (senha) => {
//         console.log('Senha: ' + senha);
//       });

// });

// server.listen(3000, () => {
//   console.log('server running at http://localhost:3000');
// });

// // ---------- CONECTANDO AO BANCO ---------- CONECTANDO AO BANCO ---------- //

//   async function connect() {
//     if (global.connection)
//         return global.connection.connect();

//     const { Pool } = require('pg');
//     const pool = new Pool({
//         connectionString: 'postgres://usr_dev:usr_dev@172.32.1.23:5432/dev'
//     });

//     //apenas testando a conexão
//     const client = await pool.connect();
//     console.log("Conectado ao PostgresSQL!");

//     //guardando para usar sempre o mesmo
//     global.connection = pool;
//       return pool.connect();
//   }


// // ---------- SELECT ---------- SELECT ---------- SELECT ---------- //

//   async function select1() {
//     const client = await connect();
//     const res = await client.query('SELECT * FROM testes_praticos.login');
//     console.log(res.rows);
//     return res.rows;
//   }

//   select1()
  


// // ---------- UPDATE ---------- UPDATE ---------- UPDATE ---------- //

//   async function update1() {
//       const client = await connect();
//       const sql = 'UPDATE testes_praticos.login SET nome=$1, email=$2, senha=$3 WHERE ID = 2';
//       const values = ['Matheus Fiala', 'Matheusfiala123@gmail.com', 'Catapimbas123'];
//       return await client.query(sql, values);
//   }


// // ---------- INSERT ---------- INSERT ---------- INSERT ---------- //

//   async function insert1() {
//     const client = await connect();
//     const sql = 'INSERT INTO testes_praticos.login (nome,email,senha) VALUES ($1,$2,$3);';
//     const values = ['Noan', 'Noan123@gmail.com', 'Javascript123'];
//     return await client.query(sql, values);
//   }

// // ---------- *DELETE* ---------- *DELETE* ---------- *DELETE* ---------- //

//   async function delete1(id){
//     const client = await connect();
//     const sql = 'DELETE FROM testes_praticos.login where id=$1;';
//     return await client.query(sql, [id]);
// }