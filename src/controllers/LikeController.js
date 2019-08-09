// Importando model Dev
const Dev = require('../model/Dev');
// Criando requisição para like
module.exports = {
    async store(req,res)  {
        // Atribuindo parametros para a variável
        const  {devId} = req.params; 
        const  {user } = req.headers; 

        // Procura o id do usuario logado
        const loggedDev = await Dev.findById(user);

        //Procura o id do usuario alvo
        const targetDev = await Dev.findById(devId);

        // Condição caso o usuario não exista
        if (!targetDev) {
            return res.status(400).json({error: "usuario não encontrado"});
            
        }
        // Condição caso o usuario tambem deu like no usuario alvo

        if (targetDev.likes.includes(loggedDev._id)) { // metodo "include" do mongo para verificar se o id do usuario estar incluido no usuario alvo
                console.log("CARA VC È PICA"); // Mesangem legal
        }

        loggedDev.likes.push(targetDev._id); // metodo push utilizado para adicionar elemnto dentro do vetor de likes no banco
                                            // "_id" é a forma que mongo salva os ids no banco

        await loggedDev.save(); // metodo "save" do mongo para salvar alterações

        return res.json(loggedDev);
    }
};