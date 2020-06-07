import express, { response } from 'express';
import routes from './routes';
import path from 'path';
import cors from 'cors';
import { errors } from 'celebrate';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '../uploads')));

// const users = ['Diego', 'Cleiton', 'Robson', 'Luiz', 'Igor'];

// app.get('/users', (req, resp) => {
//   console.log('Listagem de usuarios');

//   const search = String(req.query.search);

//   const filteredUsers = search
//     ? users.filter((user) => user.includes(search))
//     : users;

//   return resp.json(filteredUsers);
// });

// app.get('/users/:id', (req, resp) => {
//   const id = Number(req.params.id);
//   //const id2 = req.query.id;
//   return resp.json(users[id]);
// });

// app.post('/users', (req, resp) => {
//   const data = req.body;

//   console.log(data);

//   const user = {
//     name: data.name,
//     email: data.email,
//   };

//   return resp.json(user);
// });

app.use(errors());

app.listen(3333);
