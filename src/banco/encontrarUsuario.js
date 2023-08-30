const { bancoDeDados } = require("../../bancoDeDados");

const encontrarUsuarioPeloId = (id) => {
    return bancoDeDados.usuarios.find((usuario) => {
        return usuario.id === Number(id)
    });
};



module.exports = {
    encontrarUsuarioPeloId
}