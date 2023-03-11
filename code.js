//Definindo o elemento do valor inserido:
const valorE = document.getElementById("value")
//Definindo o select para mostrar os valores:
const listE = document.getElementById("List")
//Definindo a caixa de resposta:
const resE = document.getElementById("res")
//definindo um vetor para os valores:
let v = []
//definindo o contador que agira junto com o vetor:
let c = 0
//definindo a variavel de soma do total dos valores:
let sum = 0
//definindo a variavel do maior numero encontrado:
let big
//definindo a variavel do menor numero encontrado:
let small
//Definindo a função executada após clicar no botão adicionar:
function Adicionar(){
    //definindo valor:
    let valor = Number(valorE.value)
    //Verificando se o valor é válido:
    if(valor < 1 || valor>100 || valorE.value == ""){
        alert("Insira um valor válido")
    } else{
    //Criando a option mostrando o valor adicionado:
    let E = document.createElement("option")
    E.text = ("Adicionado o valor: "+valor)
    //Selecionando o select "lista" para adicionar a option:
    listE.appendChild(E)
    //Redefinindo a soma para que ela some com o valor atual:
    sum = sum+valor
    //definindo a posição do vetor de acordo com o contador, ou seja, se esse for o segundo numero adicionado, o mesmo será a segunda posição do vetor, assim, definindo também o valor da posição como o valor atual:
    v[c] = valor
    //Atribuindo o contador como contador = contador + 1 para que com o novo numero adicionado, seja adicionada mais uma posição no vetor:
    c++
    //definindo o primeiro numero como o maior atualmente, porém se surgir outro maior, ele perderá essa definição:
    big = v[0]
    //fazendo um loop para que seja verificado se o numero atual é maior que cada número inserido antes, se sim ele será definido como o maior número:
    for(let i =1; i < v.length; i++){
        if(v[i] > big){
            big = v[i]
        }
    }
    //definindo o primeiro numero como o menor atualmente, porém se surgir outro menor, ele perderá essa definição:
    small = v[0]
    //fazendo um loop para que seja verificado se o numero atual é menor que cada número inserido antes, se sim ele será definido como o menor número:
    for(let i=1; i< v.length; i++){
        if(v[i] < small){
            small = v[i]
        }
    }
    //Limpando o input do valor assim que adicionado para que o usuário não necessite apagar para inserir outro número:
    valorE.value = ""
    //fazendo com que após o usuário clicar em adicionar o cursor para digitar já volte automaticamente para maior agilidade:
    valorE.focus()
}
//fim da função adicionar
}
//definindo a função executada após clicar no botão Confirmar:
function Finalizar(){
    //fazendo uma verificação para que caso o usuário clique em confirmar e tenha um valor no input que não foi adicionado, surja um alert orientando para que o usuário o adicione:
    if(valorE.value != ""){
        alert("Clique em (Adicionar) para inserir o valor da caixa.")
    } 
    //não sendo o caso anterior, faremos uma nova verificação para caso o usuário tente confirmar com o campo de input vazio e sem ter adicionado nenhum outro número antes:
    else if(valorE.value == "" && v.length == 0){
        alert("Adicione um valor primeiro.")
    }
    //com todas as verificações feitas exibiremos a mensagem final:
     else{
    resE.innerHTML = ("")
    resE.innerHTML += ("O total de números inserido é: "+v.length+" <br> A soma de todos os números é: "+sum+" <br> O maior número encontrado é: "+big+" <br> O menor número encontrado é: "+small+" <br> A média dos números é: "+(sum/v.length).toFixed(2))
    }
}
//O botão limpar fará o recarregamento da página e todos os dados inseridos serão apagados:
function Limpar(){
    location.reload()
}