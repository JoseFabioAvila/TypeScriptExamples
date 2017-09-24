
function getNombre(){
  return "Fernando";
}

let nombre:string = "Juan";
let apellido:string = "Perez";
let edad:number = 22;

// let texto = "Hola, " + nombre + " " + apellido+ "(edad: " + edad + " )";
let texto = `Hola,
${ nombre }
${ apellido }
(edad: ${ edad })`;

let texto2:string = ` ${ 1 + 2}  `;
let texto3:string = ` ${ getNombre() } `;


console.log(texto);
console.log(texto2);
console.log(texto3);
