// EJERCICIO 2
// Escribir un programa que itere los enteros desde 1 a 100. 
// Por cada múltiplo de 3 imprime “FIZ” en lugar del numero y para los múltiplos de 5 imprime “Buzz”.
// Para los números que son múltiplos e ambos, 3 y 5, imprime “FizzBuzz”.

var numeros = [];

for(var numero = 1; numero<=100; numero++){
    numeros.push(numero);  
}

numeros.forEach(function(num){

    if(num % 3 == 0 && num % 5 == 0){
            console.log("FizzBuzz: ", num);
    }else if(num % 5 == 0){
            console.log("Buzz: ", num);
    }else if(num % 3 == 0){
            console.log("Fizz: ", num);
    }else{
        console.log(num);
    }})
