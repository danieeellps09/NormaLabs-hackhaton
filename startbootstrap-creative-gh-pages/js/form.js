const nome = document.querySelector('#nome');
const email = document.querySelector('#email');
const telefone = document.querySelector('#telefone');
const mensagem = document.querySelector('#mensagem');
const butao = document.querySelector('#contactForm');
const tabela = document.getElementById('renderiza');

const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
const setItensBD = (clientes) => localStorage.setItem('dbfunc', JSON.stringify(clientes))

butao.addEventListener('submit', function (e) {
    console.log(e.target)
    e.preventDefault()
    const clientes = {
        nome: nome.value,
        email: email.value,
        telefone: telefone.value,
        mensagem: mensagem.value, 
    }
criarCliente(clientes)
alert('Dados enviados')
window.location.href = "/startbootstrap-creative-gh-pages/httmAux.html"
limparForm()
})

function criarCliente(cliente) {
    const dbCliente = getItensBD();

console.log(dbCliente)
dbCliente.push(cliente)
console.log(dbCliente)
setItensBD(dbCliente)

}

function limparForm(){
    nome.value = "";
    email.value = "";
    telefone.value = "";
    mensagem.value = "";
}

