// IMPORTAÇÃO DO PACOTE EXPRESS PARA A INDEX
// DECLARAR UM CONSTANTE
const express = require('express')

const app = express()

app.listen(app.get('3000'), ()=>{
    console.log('SERVIDOR RODANDO')
})