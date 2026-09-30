// ========================================
// VARIÁVEIS
// ========================================

let sistemaAtivo = true;

let quantidadeAlvos = 12;

let quantidadeAlertas = 3;


// ========================================
// OBJETO DO USUÁRIO
// ========================================

const usuario = {
    nome: "João Silva",
    email: "joao.silva@email.com",
    cargo: "Operador",
    setor: "Monitoramento",
    nivelAcesso: "Operador",
    status: "Ativo"
};


// ========================================
// FUNÇÃO DE TESTE
// ========================================

function testarSistema() {

    console.log("===== CENTRO DE COMANDO =====");

    console.log("Usuário:", usuario.nome);

    console.log("Cargo:", usuario.cargo);

    console.log("Setor:", usuario.setor);

    console.log("Sistema ativo:", sistemaAtivo);

    console.log("Alvos detectados:", quantidadeAlvos);

    console.log("Alertas ativos:", quantidadeAlertas);

    console.log("=============================");
}


// ========================================
// FUNÇÃO PARA MOSTRAR O USUÁRIO
// ========================================

function mostrarUsuario() {

    document.getElementById("headerName").textContent =
        usuario.nome;

    document.getElementById("profileName").textContent =
        usuario.nome;
}


// ========================================
// EXECUÇÃO
// ========================================

mostrarUsuario();

testarSistema();