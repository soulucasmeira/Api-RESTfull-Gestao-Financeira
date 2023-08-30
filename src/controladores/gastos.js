const { encontrarUsuarioPeloId } = require("../banco/encontrarUsuario");
const { encontrarGastosPeloId } = require("../banco/encontrarGastos");

const listarGastos = (req, res) => {
    const { id } = req.params;

    if (isNaN(Number(id))) {
        return res.json({ mensagem: "O id deve ser numérico." });
    };

    const pessoaEncontrada = encontrarUsuarioPeloId(id);

    if (!pessoaEncontrada) {
        return res.json({ mensagem: "Usuario não encontrado." });
    };

    const gastosEncontrados = encontrarGastosPeloId(id);

    if (gastosEncontrados.length === 0) {
        return res.json({ mensagem: "Esse usuario não teve gastos." });
    };
    return res.json(gastosEncontrados);
};

module.exports = {
    listarGastos
}