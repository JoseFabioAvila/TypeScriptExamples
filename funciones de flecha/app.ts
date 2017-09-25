let miFunction = function(a) {
  return a;
}

let miFunctionF = a => a;



console.log(miFunction("Normal"));
console.log(miFunctionF("Flecha"));

let miFunction2 = function(a:number, b:number){
  return a + b;
}

let miFunction2F = (a:number, b:number) => a + b;


let miFunction3 = function( nombre:string ){
  nombre = nombre.toUpperCase();
  return nombre;
}

let miFunction3F = ( nombre:string ) => {
  nombre = nombre.toUpperCase();
  return nombre;
}


// --------------------------------------------------------------

let nombre = "Pedro";

let hulk = {
   nombre: "Hulk",
   smash() {

    //  setTimeout( function(){
    //    console.log(this.nombre + " smash!!!");
    //  }, 1500 );

    setTimeout( () => console.log(this.nombre + " smash!!!"), 1500 );


   }
}

hulk.smash();
