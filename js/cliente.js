

const clientes = []

let clienteEditando = null

function cadastrarCliente(nome, telefone) {

    const cliente = {
        nome,
        telefone
    }

    clientes.push(cliente)
}

function buscarCliente(nome) {

    return clientes.find(cliente => cliente.nome === cliente)
}

function listarClientes() {

}

function excluirCliente(telefone) {

}

function editarCliente(telefone) {
    
}