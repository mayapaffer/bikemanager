
const clientes = []

const bicicletas = []

const ordensServico = []

let clienteEditando = null

let bicicletaEditando = null

function cadastrarCliente(nome, telefone) {

    const cliente = {
        nome,
        telefone
    }

    clientes.push(cliente)

    console.log("Cliente cadastrado com sucesso!")
}

function cadastrarBicicleta(cliente, marca, modelo, aro, cor, chassi) { 
    
    const bicicleta = {
        cliente,
        marca,
        modelo,
        aro,
        cor,
        chassi
    }

    bicicletas.push(bicicleta)
    console.log("Bicicleta cadastrada com sucesso!")
}

function abrirOs(numero, cliente, dataEntrada, chassi, servico, valor) {
   
   const bicicletaEncontrada = bicicletas.find(bicicletaCadastrada => bicicletaCadastrada.chassi === chassi) 
   const clienteEncontrado = clientes.find(clienteCadastrado => clienteCadastrado.nome === cliente)

    if(!clienteEncontrado) {  
         console.log("Cliente não encontrado. Não é possível abrir a ordem de serviço.")
         return  
    }

    if(!bicicletaEncontrada) {
         console.log("Bicicleta não encontrada. Não é possível abrir a ordem de serviço.")
         return
    }
   
   
    const os = {
        numero,
        cliente,
        dataEntrada,
        chassi,
        servico,
        valor
    }
    
    ordensServico.push(os)
    console.log("Ordem de serviço aberta com sucesso!")
}


function procurarCliente(nome) {
    
    const cliente = clientes.find(cliente => cliente.nome === nome)
    
    if(cliente) {
        console.log(cliente)
    } else {
        console.log("Cliente não encontrado")
    }
}

function procurarBicicleta(chassi) {
    
    const bicicleta = bicicletas.find(bicicleta => bicicleta.chassi === chassi)

    if(bicicleta) {
        console.log(bicicleta)
    } else {
        console.log("Bicicleta não encontrada")
    }
}

const bicicletasJoao = bicicletas.filter(
    bicicleta => bicicleta.cliente === "João"
)

console.log(bicicletasJoao)

function listarBicicletas(nome) {
    const bicicletasCliente = bicicletas.filter(
        bicicleta => bicicleta.cliente === nome 
    )   
        if(bicicletasCliente.length > 0) {
            console.log(bicicletasCliente)
        } else {
            console.log("Nenhuma bicicleta encontrada para o cliente.")
        }
}

const indice = clientes.findIndex(
    cliente => cliente.nome === "Maria"
)

console.log(indice)


function alterarStatusOs(numero, novoStatus) {
    const indice = ordensServico.findIndex(
        os => os.numero === numero
    )

    if(indice !== -1) {
        ordensServico[indice].status = novoStatus
        console.log("Status da ordem de serviço alterado com sucesso!")
    } else {
        console.log("Ordem de serviço não encontrada")
    }
}

function excluirOs(numero) { 
    const indice = ordensServico.findIndex(
        os => os.numero === numero
    )

    if(indice !== -1) {
        ordensServico.splice(indice, 1)
        console.log("Ordem de serviço excluída com sucesso!")
    } else {
        console.log("Ordem de serviço não encontrada")
    }
}


const btnCliente = document.getElementById("btnCliente")

const btnBicicleta = document.getElementById("btnBicicleta")

const btnOs = document.getElementById("btnOs")

const btnCaixa = document.getElementById("btnCaixa")


const formContainer = document.querySelector(".form-container")
btnCliente.addEventListener("click", function () {
    formContainer.style.display = "block"
})


const formCliente = document.getElementById("formCliente")

const inputName = document.getElementById("nome")

const inputTelefone = document.getElementById("telefone")

const mensagem = document.getElementById("mensagem")

const listaClientes = document.getElementById("listaClientes")

formCliente.addEventListener("submit", function(event) { 
    
    event.preventDefault()

    const nome = inputName.value.trim()
    const telefone = inputTelefone.value.trim()

    if(nome === "" || telefone === "") {
        
        mensagem.textContent = "Preencha todos os campos! ❌"

        return
    }

    if(clienteEditando) {
        
        clienteEditando.nome = nome 
        clienteEditando.telefone =  telefone

        mensagem.textContent = "Cliente atualizado com sucesso! ✅"

        clienteEditando = null
    } else {
        
        cadastrarCliente(nome, telefone)

        mensagem.textContent = "Cliente cadastrado com sucesso! ✅"
    }

    listarClientes()

   inputName.value = ""
   inputTelefone.value = ""
})


function listarClientes() {
    
    listaClientes.innerHTML = ""

    clientes.forEach(cliente => {
        
        const item = document.createElement("div")

        item.classList.add("cliente-card")

        const nomeCliente = document.createElement("h3")

        nomeCliente.textContent = cliente.nome

        const telefoneCliente = document.createElement("p")

        telefoneCliente.textContent = cliente.telefone

        const btnExcluir = document.createElement("button")

        btnExcluir.textContent = "Excluir"
        btnExcluir.addEventListener("click", function() {
            
            const confirmar = confirm("Deseja excluir esse cliente ?")

            if(confirmar) {
                excluirCliente(cliente.telefone)
            }
        })

        const btnEditar = document.createElement("button")
        btnEditar.textContent = "Editar"
        btnEditar.addEventListener("click", function(){
            
            editarCliente(cliente.telefone)
        })


        item.appendChild(nomeCliente)
        item.appendChild(telefoneCliente)
        item.appendChild(btnEditar)
        item.appendChild(btnExcluir)

        listaClientes.appendChild(item)
    })
}

function excluirCliente(telefone) { 
    
    const clientesAtualizados = clientes.filter(
        cliente => cliente.telefone !== telefone
    )

    clientes.length = 0
    
    clientes.push(...clientesAtualizados)

    listarClientes()
}

function editarCliente(telefone) {
    
    const cliente = clientes.find(
        cliente => cliente.telefone === telefone
    )

    clienteEditando = cliente

    inputName.value = cliente.nome
    inputTelefone.value = cliente.telefone 
}

const formBicicleta = document.getElementById("formBicicleta")

const clienteBike = document.getElementById("clienteBike")
const marca = document.getElementById("marca")
const modelo = document.getElementById("modelo")
const aro = document.getElementById("aro")
const cor = document.getElementById("cor")
const chassi = document.getElementById("chassi")

function cadastrarBicicleta (cliente, marca, modelo, aro, cor, chassi) {
     
    const bicicleta = {
        cliente,
        marca,
        modelo,
        aro,
        cor,
        chassi
    }

    bicicletas.push(bicicleta)

    console.log("Bicicleta cadastrada com sucesso!")
}


formBicicleta.addEventListener("submit", function(event) {
    
    event.preventDefault()

    const nomeCliente = clienteBike.value.trim()
    const marcaBike = marca.value.trim()
    const modeloBike = modelo.value.trim()
    const aroBike = Number(aro.value)
    const corBike = cor.value.trim()
    const chassiBike = chassi.value.trim()
    
    const mensagemBike = document.getElementById("mensagemBike")

    const clienteEncontrado = buscarCliente(nomeCliente)

    if(!clienteEncontrado) { 
        console.log("Cliente não encontrado")

        return
    }

    if (bicicletaEditando) { 

        bicicletaEditando.cliente = nomeCliente
        bicicletaEditando.marca = marcaBike
        bicicletaEditando.modelo = modeloBike
        bicicletaEditando.aro = aroBike
        bicicletaEditando.cor = corBike
        bicicletaEditando.chassi = chassiBike  
    
        mensagemBike.textContent = "Bicicleta atualizada com sucesso! ✅"

        bicicletaEditando = null
    } 
   
    else {

        cadastrarBicicleta(nomeCliente, marcaBike, modeloBike, aroBike, corBike, chassiBike)

        mensagemBike.textContent = "Bicicleta cadastrada com sucesso! ✅"
    }

    listarBicicletas()

    clienteBike.value = ""
    marca.value = ""
    modelo.value = ""
    aro.value = ""
    cor.value = ""
    chassi.value = ""

    clienteBike.focus()
})

function buscarCliente (nome) { 
    
    return clientes.find(
        cliente => cliente.nome === nome 
    )
}

const listaBicicletas = document.getElementById("listaBicicletas")


function listarBicicletas () {
    
    listaBicicletas.innerHTML = ""

    bicicletas.forEach(bicicleta => {
        
        const item = document.createElement("div")

        item.classList.add("cliente-card")

        const nomeCliente = document.createElement("h3")

        nomeCliente.textContent = bicicleta.cliente 

        const detalhes = document.createElement("p")

        detalhes.textContent = `${bicicleta.marca} ${bicicleta.modelo} - Aro ${bicicleta.aro}`

        const chassiBike = document.createElement("p")

        chassiBike.textContent = `Chassi: ${bicicleta.chassi}`

        const btnExcluir = document.createElement("button")

        btnExcluir.textContent = "Excluir"
        btnExcluir.addEventListener("click", function(){

            const confirmar = confirm(
                "Deseja excluir essa bicicleta ?"
            )

            if(confirmar){
                excluirBicicleta(bicicleta.chassi)
            }
        })

        const btnEditar = document.createElement("button")
        btnEditar.textContent = "Editar"
        btnEditar.addEventListener("click", function(){
            
            editarBicicleta(bicicleta.chassi)
        })



        item.appendChild(nomeCliente)
        item.appendChild(detalhes)
        item.appendChild(chassiBike)
        item.appendChild(btnEditar)
        item.appendChild(btnExcluir)


        listaBicicletas.appendChild(item)
    })
}


function excluirBicicleta (chassi) {
    
    const bicicletasAtualizadas = bicicletas.filter(
        bicicleta => bicicleta.chassi !== chassi
    )

    bicicletas.length = 0

    bicicletas.push(...bicicletasAtualizadas)

    listarBicicletas()
}

function editarBicicleta (chassi) { 

    const bicicleta = bicicletas.find(

        bicicleta => bicicleta.chassi === chassiBike
    )

    if (!bicicleta) {
        return
    }

    clienteBike.value = bicicleta.cliente
    marca.value = bicicleta.marca
    modelo.value = bicicleta.modelo
    aro.value = bicicleta.aro
    cor.value = bicicleta.cor
    document.getElementById("chassi").value = bicicleta.chassi
}








