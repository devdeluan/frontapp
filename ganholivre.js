
let prompt =require ('prompt-sync') ()

let kmRodado =  parseFloat(prompt('KM rodado: '))
let ganhoDia =  parseFloat(prompt('Ganho do dia R$: '))
let combustivel = parseFloat(prompt('Digite o valor do Combustível: '))
let consumo =  parseFloat(prompt('Digite o consumo médio do carro: '))
let resultado = ganhoDia / kmRodado
let resultado2 = combustivel / consumo
let livre = resultado - resultado2
let gastoDia = kmRodado * resultado2
let ganhoLivre = ganhoDia - gastoDia

if (resultado){
    console.log ("=================================")
    console.log ("=================================")
    console.log("KM rodado: " + kmRodado + "KM")  
    console.log("Ganho do dia: " + ganhoDia.toFixed(2)) 
    console.log("Valor do combustível: R$ " + combustivel.toFixed(2)) 
    console.log("Consumo médio do veículo: " + consumo.toFixed(1)+ "L") 
    console.log("Ganho por KM: " + resultado.toFixed(2))  
    console.log("Gasto por KM: " + resultado2.toFixed(2)) 
    console.log("Ganho livre por KM: " + livre.toFixed(2)) 
    console.log("Gasto do dia Combustível: " + gastoDia.toFixed(2)) 
    console.log("Ganho livre : " + ganhoLivre.toFixed(2)) 
    console.log ("=================================") 
    console.log ("=================================")
} 