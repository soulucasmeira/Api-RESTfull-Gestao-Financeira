const { encontrarUsuarioPeloId } = require("../banco/encontrarUsuario");

const atualizarUsuario = (req, res) => {
    const { id } = req.params;
    const { nome, email, senha } = req.body;

    if (isNaN(Number(id))) {
        return res.status(400).json({ mensagem: "O id deve ser numérico." });
    };

    if (!nome || !email || !senha) {
        return res.status(400).json({ mensagem: "Todos os campos são obrigatórios." })
    };

    const usuarioEncontrado = encontrarUsuarioPeloId(id);
    if (!usuarioEncontrado) {
        return res.status(404).json({ mensagem: "Usuario não encontrado." });
    };

    return res.json(usuarioEncontrado)

};

module.exports = {
    atualizarUsuario
}