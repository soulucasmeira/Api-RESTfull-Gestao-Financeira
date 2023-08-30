const { bancoDeDados } = require("../../bancoDeDados");

const encontrarUsuarioPeloId = (idPessoa) => {
    return bancoDeDados.usuarios.find((usuario) => {
        return usuario.id === Number(idPessoa)
    });
};



module.exports = {
    encontrarUsuarioPeloId
}