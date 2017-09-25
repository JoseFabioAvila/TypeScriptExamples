var miFunction = function (a) {
    return a;
};
var miFunctionF = function (a) { return a; };
console.log(miFunction("Normal"));
console.log(miFunctionF("Flecha"));
var miFunction2 = function (a, b) {
    return a + b;
};
var miFunction2F = function (a, b) { return a + b; };
var miFunction3 = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
var miFunction3F = function (nombre) {
    nombre = nombre.toUpperCase();
    return nombre;
};
// --------------------------------------------------------------
var nombre = "Pedro";
var hulk = {
    nombre: "Hulk",
    smash: function () {
        //  setTimeout( function(){
        //    console.log(this.nombre + " smash!!!");
        //  }, 1500 );
        var _this = this;
        setTimeout(function () { return console.log(_this.nombre + " smash!!!"); }, 1500);
    }
};
hulk.smash();
