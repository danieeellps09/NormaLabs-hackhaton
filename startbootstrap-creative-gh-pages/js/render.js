
const tabela = document.getElementById('renderiza');

const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
const setItensBD = (clientes) => localStorage.setItem('dbfunc', JSON.stringify(clientes))
console.log(getItensBD())


function renderizar(id){
    let tr = document.createElement('tr')
  
    tr.innerHTML = `
      <td>${id.nome}</td>
      <td>${id.email}</td>)
      <td>${id.telefone}</td>
      <td>${id.mensagem}</td>
    `
    tabela.appendChild(tr)
}

function percorreArray(){
    const dados = renderizar(id)
    dados.forEach(element => {
        element
    });

}
