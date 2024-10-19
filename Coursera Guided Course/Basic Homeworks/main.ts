console.log("Hola Mundo")

let miTexto: string="Hola mundo de nuevo";
console.log(miTexto);

let tagUno: string = "<div class=\"ejemplo\">";
let tagDos: string = "<div class='ejemplo'>";

console.log(tagUno);
console.log(tagDos);

console.log("Esto es una linea\nEsto es otra linea");

console.log(`Esto es una linea
Esto es otra linea`);

console.log(`El valor de la variable es ${miTexto}`);
console.log(`El valor de la variable es \'${miTexto}\'`);
console.log(`El valor de la variable es '${miTexto}'`);

let op1: number = 10;
let op2: number = 15;

console.log(`Mis variables son ${op1} y ${op2}`);

op1++;
op2+=4;

console.log(`Mis variables finales son ${op1} y ${op2}`);

let resultado: number = op1/op2;

console.log(`Resultado: ${resultado}`);
console.log(`Resultado: ${resultado.toPrecision(2)}`);

let varTipoDesconocido: any;
console.log(`La variable tiene valor ${varTipoDesconocido} y es de tipo ${typeof(varTipoDesconocido)}` );
varTipoDesconocido = "Ahora es un texto";
console.log(`La variable tiene valor ${varTipoDesconocido} y es de tipo ${typeof(varTipoDesconocido)}` );
varTipoDesconocido = 2.8;
console.log(`La variable tiene valor ${varTipoDesconocido} y es de tipo ${typeof(varTipoDesconocido)}` );

let varTipoIndefinido: undefined;
varTipoIndefinido = undefined;

let varVoid: void = undefined;
console.log(`La variable tiene valor ${varVoid} y es de tipo ${typeof(varVoid)}` );

function imprimiMensaje(): void {
    console.log(`Mensaje generico`);
}

function imprimiMensaje2(msg:string): void {
    console.log(msg);
}

imprimiMensaje();
imprimiMensaje2("Mensaje parametro");

function sumar(op1: number, op2: number): number{
    return op1+op2;
}

var fSumar = sumar;
console.log(fSumar(20,25));
