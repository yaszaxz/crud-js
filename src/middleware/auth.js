const jwt = require("jsonwebtoken")

function authentication(req, res, next){
    
    const token = req.headers['authorization']
    if(!token){
        return res.status(400).send({msg: "Token não informado ou sem permissão"})
    }

    jwt.verify(token, "segredo", (err, decoded) => {
        if(err){
            console.error('Erro ao decodificar', err)
            return res.status(400).send({msg: "Token não informado ou sem permissão"})
        }

        console.log(decoded)

        next()
    })
}

module.exports = authentication;