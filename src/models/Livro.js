const mongoose = require('mongoose');

const LivroSchema = new mongoose.Schema({
  image:String,
  name: String,
  tipos:[String],
  descricao: String,
  user: {
    type:mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports =mongoose.model('Livro',LivroSchema);