const express = require('express')
const { listarCarros, buscarCarro } = require('./controladores/carros')
const { validarSenha } = require('./intermediarios')


const app = express()

app.use(validarSenha)

app.get('/carros', listarCarros)

app.get('/carros/:id', buscarCarro)

app.listen(3000)