let produtos = JSON.parse (localStorage.getItem("produtos"))

let tbody = document.getElementById("tb-product")

let lista  = produtos.map(function(produto, indice) {
  return `<tr>
    <td>${produto.codigo}</td>
    <td>${produto.descricao}</td>
    <td>${produto.fornecedor}</td>
    <td>${produto.marca}</td>
    <td>${produto.quantidade}</td>
    <td>${produto.custo}</td>
    <td>${produto.venda}</td>
  </tr>`

})

tbody.innerHTML = lista.join('')