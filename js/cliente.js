const formCliente =  document.getElementById('form-cliente')

formCliente.addEventListener('submit', (e) => {
  e.preventDefault();

  let nome = document.getElementById('nome').value;
  let email = document.getElementById('email').value;
  let cpf = document.getElementById('cpf').value;
  let telefone = document.getElementById('telefone').value;
  let cep = document.getElementById('cep').value;
  let endereco = document.getElementById('endereco').value;
  let bairro = document.getElementById('bairro').value;
  let cidade = document.getElementById('cidade').value;

  let data = {
    nome,
    email,
    cpf,
    telefone,
    cep,
    endereco,
    bairro,
    cidade
  }

  
  let clientes = JSON.parse(localStorage.getItem("clientes") || "[]")
  clientes.push(data)
  localStorage.setItem("clientes", JSON.stringify(clientes))

  window.location.href = "clientList.html"
  // alert('cliente cadastrado com sucesso!!')

})
