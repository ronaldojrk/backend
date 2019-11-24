const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');
const routes = express.Router();
const upload = multer(uploadConfig);




const SessionController =require('./controllers/SessionController');
const LivroController =require('./controllers/LivroController');
const LoginController =require('./controllers/LoginController');
const PlaylivroController =require('./controllers/PlaylivroController');




routes.get('/',(req,res)=>{
  return res.json({message:"hello"});
});
routes.get('/sessions',SessionController.index);
routes.post('/sessions',SessionController.store);


routes.get('/livros',LivroController.index);
routes.post('/livros',upload.single('image'),LivroController.store);

routes.get('/login',LoginController.show);

routes.post('/livro/:livro_id/playlivro',PlaylivroController.store);

  module.exports = routes;