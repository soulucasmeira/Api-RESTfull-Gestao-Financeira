const { bancoDeDados } = require("../../bancoDeDados");

const encontrarUsuarioPeloId = (idPessoa) => {
    return bancoDeDados.usuarios.find((usuario) => {
        return usuario.id === Number(idPessoa)
    });
};

const encontrarGastosPeloId = (idPessoa) => {
    return bancoDeDados.gastos.filter((gasto) => {
        return gasto.id_usuario === Number(idPessoa);
    });
}

module.exports = {
    encontrarUsuarioPeloId,
    encontrarGastosPeloId
}