const express = require('express');

const rotas = express();

rotas.get('/usuarios/:id/gastos', (req, res) => {
    const { id } = req.params
    if (!id) {
        return { mensagem: "O id deve ser informado." }
    };

    if (isNaN(Number(id))) {
        return { mensagem: "O id deve ser numérico." }
    };


    const pessoaEncontrada = encontrarUsuarioPeloId(id);

    if (!pessoaEncontrada) {
        return { mensagem: "Usuario não encontrado." };
    };

    const gastosEncontrados = encontrarGastosPeloId(id);

    if (gastosEncontrados.length === 0) {
        return { mensagem: "Esse usuario não teve gastos." };
    };
    return gastosEncontrados;
});

module.exports = rotas;