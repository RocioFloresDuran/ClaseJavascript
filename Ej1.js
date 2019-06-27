// Escribir un loop que itere desde 0 a 30. 
// For cada iteracion debera verificar si el numero es par o impar y mostrarlo en pantalla

var numero = 0;

while(numero <= 30){

if ((numero % 2) == 0){
    console.log(numero, " es Par ");
} else {
    console.log(numero, " es Impar ");
}
numero++
}