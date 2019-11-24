const express = require ('express');
const mongoose = require ('mongoose');
const routes =require('./routes');


const app = express();
mongoose.connect('mongodb+srv://app:app@mylist-z3tgc.mongodb.net/test?retryWrites=true&w=majority',{
  useNewUrlParser:true,
  useUnifiedTopology:true,
})

//req.query =acessar query params (para filtro)
// req.params =acessar route params (para edição e delete)
//req.body = acessar corpo da requisição(criação ou edição de registro)



app.use(express.json());
app.use(routes);

app.listen(process.env.PORT ||3000);