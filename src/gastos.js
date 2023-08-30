const { bancoDeDados } = require("../bancoDeDados");

const listarGastos = (idPessoa) => {
    if (!idPessoa) {
        return { mensagem: "O id deve ser informado." }
    };

    if (isNaN(Number(idPessoa))) {
        return { mensagem: "O id deve ser numérico." }
    };


    const pessoaEncontrada = bancoDeDados.usuarios.find((usuario) => {
        return usuario.id === Number(idPessoa)
    });

    if (!pessoaEncontrada) {
        return { mensagem: "Usuario não enontrado." }
    };

    const gastosEncontrados = bancoDeDados.gastos.filter((gasto) => {
        return gasto.id_usuario === Number(idPessoa);
    });
    if (gastosEncontrados.length === 0) {
        return { mensagem: "Esse usuario não teve gastos." }
    }


    return gastosEncontrados

};

console.log(listarGastos('4'))


module.exports = {
    listarGastos
}