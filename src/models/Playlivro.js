const mongoose = require('mongoose');

const PlaylivroSchema = new mongoose.Schema({
  ler:{
    type: Boolean,
    default: true
  },
  favorito:Boolean,
  user: {
    type:mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  livro: {
    type:mongoose.Schema.Types.ObjectId,
    ref: 'Livro'
  }
});

module.exports =mongoose.model('Playlivro',PlaylivroSchema);