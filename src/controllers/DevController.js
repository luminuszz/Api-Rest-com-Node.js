// Imports
const axios =  require('axios'); // Axios para chamadas assincronas
const Dev =  require('../model/Dev'); // importando a conexão com banco
module.exports = {

    async index(req,res){
        const {user} = req.headers;

        const loggedUser = await Dev.findById(user);

        const users = await Dev.find({

            $and:[ // "$and" aplica todos os filtros ao mesmo tempo

                {_id:{$ne:user}}, // "$ne" = notequal (diferente) no mongo db
                { _id: { $nin: loggedUser.likes } },  // "$nin" =  notin ( não esteja)
                { _id: { $nin: loggedUser.dislikes } },  // "$nin" =  notin ( não esteja)
            ],

        });
        return res.json(users);

    },

    async store(req,res){
        // Classe assincrona se utiliza "async" "await"
        // Declarando username como corpo da requisição
        const {username} = req.body;

        // Criando variavel userExist para receber valor do usuario solicitado

        // utlizando metodo do mongobd "findOne" para achar o usuario
        const userExist = await Dev.findOne({user: username}); // Utilizando await por ser assincrono


        if (userExist){ // Condição criada caso usuario a ser cadastrado já estiver no banco

            // Retorna o json do usuario correspondente
            return res.json(userExist);

        }

        // Chamada da API usando axios
        const response =  await axios.get(`https://api.github.com/users/${username}`);


        // Criando variaves constantes para chamar dados da api usando desistruturação
        const { name,bio,avatar_url: avatar } = response.data;


        // Chamando model de conexão com banco de dados


        const dev = await Dev.create({ // Criando variavel "Dev" para armazenar a array de dados

            // Declarando dados a ser puxados dentro da array
            name,
            user: username,
            bio,
            avatar,

        })

        // Retornando JSON com os dados solicitadps da API
        return res.json(dev);




    }

};
