const {Schema, model} =  require('mongoose');
// Utilizando essa sintaxe n é preciso definir uma variavel para o pacote

const DevSchema =  new Schema({
    name:{
        type: String,
        required: true,
    },
    user:{
        type: String,
        required: true,
    },
    bio: String,
    avatar:{
        type: String,
        required: true

    },
    
    
},
{timestamps:true});

// o objeto timestamps cria 2 colunas adicionais createdAp E uptad

module.exports = model('Dev',DevSchema);

// Exportanto moduldo para ser usado como conexão dessa tabela