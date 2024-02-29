function verificarProduto() {
    var nome_produto = document.getElementById("formGroupExampleInput").value;
    if (nome_produto!= "") {
        alert("Cadastro Confirmado")
        document.getElementById("formGroupExampleInput").style.backgroundColor = "#00FF00";

    }else{
        alert("Nome do produto Obrigatorio");
        document.getElementById("formGroupExampleInput").style.backgroundColor = "#FF0000";
    }


}










