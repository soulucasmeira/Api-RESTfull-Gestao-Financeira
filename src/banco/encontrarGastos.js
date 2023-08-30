const { bancoDeDados } = require("../../bancoDeDados");

const encontrarGastosPeloId = (id) => {
    return bancoDeDados.gastos.filter((gasto) => {
        return gasto.id_usuario === Number(id);
    });
}

module.exports = {
    encontrarGastosPeloId
}