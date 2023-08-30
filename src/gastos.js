const { bancoDeDados } = require("../bancoDeDados");
const { encontrarGastosPeloId } = require("./banco/encontrarGastos");
const { encontrarUsuarioPeloId } = require("./banco/encontrarUsuario");

const listarGastos = (idPessoa) => {
    if (!idPessoa) {
        return { mensagem: "O id deve ser informado." }
    };

    if (isNaN(Number(idPessoa))) {
        return { mensagem: "O id deve ser numérico." }
    };


    const pessoaEncontrada = encontrarUsuarioPeloId(idPessoa);

    if (!pessoaEncontrada) {
        return { mensagem: "Usuario não encontrado." };
    };

    const gastosEncontrados = encontrarGastosPeloId(idPessoa);

    if (gastosEncontrados.length === 0) {
        return { mensagem: "Esse usuario não teve gastos." }
    }


    return gastosEncontrados

};

console.log(listarGastos('1'))


module.exports = {
    listarGastos
}