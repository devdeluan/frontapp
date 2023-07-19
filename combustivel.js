let prompt =require ('prompt-sync') ()

let alcool =  document.getElementById ("alcool").value
let gasolina =   document.getElementById ("gasolina").value
let resultado = alcool / gasolina




if (resultado <=0.7){
    console.log ("=================================")
    console.log("Use: Álcool" )  
    console.log ("=================================")
} else {
    console.log ("=================================")
    console.log("Use: Gasolina" )  
    console.log ("=================================")
}
