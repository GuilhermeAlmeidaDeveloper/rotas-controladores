const express = require('express')
const { listarCarros, buscarCarro } = require('./controladores/carros')


const app = express()


app.get('/carros', listarCarros)

app.get('/carros/:id', buscarCarro)

app.listen(3000)