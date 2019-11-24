const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController =require('./controllers/SessionController');
const LivroController =require('./controllers/LivroController');
const LoginController =require('./controllers/LoginController');
const PlaylivroController =require('./controllers/PlaylivroController');

const routes = express.Router();
const upload = multer(uploadConfig);

routes.get('/sessions',SessionController.index);
routes.post('/sessions',SessionController.store);


routes.get('/livros',LivroController.index);

routes.post('/livros',upload.single('image'),LivroController.store);

routes.get('/login',LoginController.show);

routes.post('/livro/:livro_id/playlivro',PlaylivroController.store);

  module.exports = routes;