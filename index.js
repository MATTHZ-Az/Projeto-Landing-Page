var setaDireita = window.document.getElementById("seta-direita")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var bruna = window.document.getElementById("bruna")
var setaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita(){
    Leonardo.style ="display:none"
    bruna.style ="display:flex"
    setaEsquerda.style ="display:flex; margin-top: 60px"
    setaDireita.style ="display:none"

}

function  RolarParaEsquerda(){
    Leonardo.style ="display:flex"
    bruna.style ="display:none"
    setaEsquerda.style ="display:none"
    setaDireita.style ="display:flex"
}
