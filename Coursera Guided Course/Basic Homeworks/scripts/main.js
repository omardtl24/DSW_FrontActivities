console.log("Hola Mundo");
var miTexto = "Hola mundo de nuevo";
console.log(miTexto);
var tagUno = "<div class=\"ejemplo\">";
var tagDos = "<div class='ejemplo'>";
console.log(tagUno);
console.log(tagDos);
console.log("Esto es una linea\nEsto es otra linea");
console.log("Esto es una linea\nEsto es otra linea");
console.log("El valor de la variable es ".concat(miTexto));
console.log("El valor de la variable es '".concat(miTexto, "'"));
console.log("El valor de la variable es '".concat(miTexto, "'"));
var op1 = 10;
var op2 = 15;
console.log("Mis variables son ".concat(op1, " y ").concat(op2));
op1++;
op2 += 4;
console.log("Mis variables finales son ".concat(op1, " y ").concat(op2));
var resultado = op1 / op2;
console.log("Resultado: ".concat(resultado));
console.log("Resultado: ".concat(resultado.toPrecision(2)));
var varTipoDesconocido;
console.log("La variable tiene valor ".concat(varTipoDesconocido, " y es de tipo ").concat(typeof (varTipoDesconocido)));
varTipoDesconocido = "Ahora es un texto";
console.log("La variable tiene valor ".concat(varTipoDesconocido, " y es de tipo ").concat(typeof (varTipoDesconocido)));
varTipoDesconocido = 2.8;
console.log("La variable tiene valor ".concat(varTipoDesconocido, " y es de tipo ").concat(typeof (varTipoDesconocido)));
var varTipoIndefinido;
varTipoIndefinido = undefined;
var varVoid = undefined;
console.log("La variable tiene valor ".concat(varVoid, " y es de tipo ").concat(typeof (varVoid)));
function imprimiMensaje() {
    console.log("Mensaje generico");
}
function imprimiMensaje2(msg) {
    console.log(msg);
}
imprimiMensaje();
imprimiMensaje2("Mensaje parametro");
function sumar(op1, op2) {
    return op1 + op2;
}
var fSumar = sumar;
console.log(fSumar(20, 25));
