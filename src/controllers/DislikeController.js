// Importando model Dev
const Dev = require('../model/Dev');
// Criando requisição para like
module.exports = {
    async store(req, res) {
        // Atribuindo parametros para a variável
        const { devId } = req.params;
        const { user } = req.headers;

        // Procura o id do usuario logado
        const loggedDev = await Dev.findById(user);

        //Procura o id do usuario alvo
        const targetDev = await Dev.findById(devId);

        // Condição caso o usuario não exista
        if (!targetDev) {
            return res.status(400).json({ error: "usuario não encontrado" });

        }
    
       

        loggedDev.dislikes.push(targetDev._id); // metodo push utilizado para adicionar elemnto dentro do vetor de likes no banco
        // "_id" é a forma que mongo salva os ids no banco

        await loggedDev.save(); // metodo "save" do mongo para salvar alterações

        return res.json(loggedDev);
    }
};