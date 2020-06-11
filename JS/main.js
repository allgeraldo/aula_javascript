function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>EU disse nao clica pow</b>";
    //console.log(document.getElementById("agradecimento"))
}  

function rediricionar(){
    window.open("https://www.google.com.br/");
    //window.location.href = "https://www.google.com.br/"
}

function trocar(elemento){
    document.getElementById("mousemove").innerHTML = "valeu"
    //alert("trocar texto")
elemento.innerHTML = "obrigado por passar o mouse "
}
 
function voltar(elemento){
    document.getElementById("mousemove").innerHTML = "Passar o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui"
}

function load(){
    alert("Página carregada");
}

function funcaochange(elemento){
    console.log(elemento.value);
}

/*alert ("Por que tu clicou?")
/*
function soma(n1, n2){
    return n1 + n2;
}
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome, novo_nome)

}

alert (soma(5, 10));
alert(setReplace("vai Brasil"))
*/

/*
var d = new Date();
alert(d.get);
*/

/*
var count = 0;
for(count=0; count <=5; count++){
    alert(count)
}
*/

/*
var count = 0;
while(count <= 5){
    console.log(count);
    alert(count);
    count++
};
*/

/*
var idade = prompt("Qual sua idade?")
if(idade >= 18){
alert("Maior de idade")
}else{
    alert("Menor de idade");
};
*/

/*
var fruta = [{nome:"maça", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(fruta);
alert(fruta[1].nome);
/
/*var fruta = {nome:"maça", cor:"vermelha"}
console.log(fruta.nome)
alert(fruta.cor)
*/
//var lista = ["maça", "wait this is illegal", "laranja"]
//lista.pop()
//lista.push("uva");
//console.log(lista.length);     
//console.log(lista);    
//console.log(lista.toString()) 
//console.log(lista.join(" - ")) 

//var nome = "Allan Geraldo";
//var n1 = 18
//var n2 = 10
//var frase =  "japão é bonito"
//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);
//console.log(nome);
//console.log(n1 + n2);
//console.log(frase);
