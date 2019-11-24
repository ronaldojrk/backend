const Playlivro = require ('../models/Playlivro');



module.exports = {
  async store (req,res){
    const {user_id } = req.headers;
    const {livro_id } = req.params;

    const playlivro = await Playlivro.create({
      user: user_id,
      livro:livro_id,
    });
    await playlivro.populate('livro').execPopulate();
    return res.json(playlivro);
  }
};