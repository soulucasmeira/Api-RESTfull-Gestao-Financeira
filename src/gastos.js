const { bancoDeDados } = require("../bancoDeDados");
const { encontrarGastosPeloId } = require("./banco/encontrarGastos");
const { encontrarUsuarioPeloId } = require("./banco/encontrarUsuario");

const listarGastos = (idPessoa) => {

};

console.log(listarGastos('3'))


module.exports = {
    listarGastos
}