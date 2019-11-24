const Livro = require('../models/Livro');

module.exports ={
  async show(req,res){
    const{ user_id } = req.headers;

    const livros = await Livro.find({user:user_id});
    return res.json(livros);
  }
}