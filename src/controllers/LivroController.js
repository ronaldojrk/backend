const Livro = require ('../models/Livro');
const User = require ('../models/User');
module.exports = {

  async index(req,res){
    const {tech}= req.query;
    const livros = await Livro.find({ tipos:tech });
    
    return res.json(livros);

  },



  async store(req,res){
    const {filename} =req.file;
    const {nome,tipos,descricao} = req.body;
    const {user_id} = req.headers;


    const user = await User.findById(user_id);

    if(!user){
      return res.status(400).json({error : 'user does not existes'})
    }

    const livro = await Sport.create({
      user:user_id,
      image:filename,
      nome,
      tipos: tipos.split(',').map(tipo =>tipo.trim()),
      descricao
    })

    return res.json(livro)
  }
};