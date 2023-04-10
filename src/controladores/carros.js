const carros = require('../bancodedados')

function listarCarros(req, res) {
    const { marca, cor } = req.query
    let resultado = carros;

    if (marca) {
        resultado = resultado.filter((carro) => {
            return carro.marca === marca
        })
    }

    if (cor) {
        resultado = resultado.filter((carro) => {
            return carro.cor === cor
        })
    }



    res.send(resultado)
}


function buscarCarro(req, res) {
    const { id } = req.params

    const carroEncontrado = carros.filter((carro) => {
        return carro.id === Number(id)
    })

    res.send(carroEncontrado)
}


module.exports = {
    listarCarros,
    buscarCarro
}
