let clientes = JSON.parse (localStorage.getItem("clientes"))

let tbody = document.getElementById("tb-client")

let lista  = clientes.map(function(cliente, indice) {
  return `<tr>
    <td>${cliente.nome}</td>
    <td>${cliente.email}</td>
    <td>${cliente.cpf}</td>
    <td>${cliente.telefone}</td>
    <td>${cliente.cep}</td>
    <td>${cliente.endereco}</td>
    <td>${cliente.bairro}</td>
    <td>${cliente.cidade}</td>
  </tr>`

})

tbody.innerHTML = lista.join('')


