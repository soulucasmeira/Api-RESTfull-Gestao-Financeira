const { bancoDeDados } = require("../../bancoDeDados");

const encontrarGastosPeloId = (idPessoa) => {
    return bancoDeDados.gastos.filter((gasto) => {
        return gasto.id_usuario === Number(idPessoa);
    });
}

module.exports = {
    encontrarGastosPeloId
}