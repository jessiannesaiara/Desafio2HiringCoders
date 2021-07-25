const formProduto =  document.getElementById('form-produto')

formProduto.addEventListener('submit', (e) => {
  e.preventDefault();

  let codigo = document.getElementById('codigo').value;
  let descricao = document.getElementById('descricao').value;
  let fornecedor = document.getElementById('fornecedor').value;
  let marca = document.getElementById('marca').value;
  let quantidade = document.getElementById('quantidade').value;
  let custo = document.getElementById('custo').value;
  let venda = document.getElementById('venda').value;

  let data = {
    codigo,
    descricao,
    fornecedor,
    marca,
    quantidade,
    custo,
    venda

  }

  
  let produtos = JSON.parse(localStorage.getItem("produtos") || "[]")
  produtos.push(data)
  localStorage.setItem("produtos", JSON.stringify(produtos))

  window.location.href = "productList.html"

})
