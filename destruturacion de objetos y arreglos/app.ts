
/*
   Objetos
*/
let avenger = {
  nombre: "Steve",
  clave: "Capitan America",
  poder: "Droga super soldado"
}

let { clave, nombre, poder } = avenger;

// let nombre =  avenger.nombre;
// let clave =  avenger.clave;
// let poder =  avenger.poder;

console.log(nombre, clave, poder);

/*
   Arreglos
*/

let avengers:string[] = ["Thor","Steve","Tony" ];

let [ thor, capi, iroman ] = avengers;


console.log( thor, capi, iroman);
