const ModelPessoa = require('../models/pessoa')

// criando a classe servicePessoa
class ServicePessoa {
    async GetPessoas() {
        return ModelPessoa.findAll()
    }
    CreatePessoa(name, password, email) {
        if(!name || !password || !email){
            throw new Error("Favor preencher todos os campos")
        }
        return ModelPessoa.create({name, password, email})
    }
    async UpdatePessoa(id, name, password, email) {
        if(!id){
            throw new Error("Informe o id")
        }
        const pessoa = await ModelPessoa.findByPk(id)
        if(!pessoa){
            throw new Error("Pessoa não encontrada")
        }
        
        pessoa.name = name || pessoa.name
        pessoa.password = password || pessoa.password
        pessoa.email = email || pessoa.email

        pessoa.save()
        return pessoa
    }
    DeletePessoa(id) {
        
        return ModelPessoa.destroy({where: {id}})
    }
}
module.exports = new ServicePessoa()