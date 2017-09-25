var prom1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Promesa terminada");
        resolve();
        //reject();
    }, 1500);
});
console.log("Paso 1");
prom1.then(function () {
    console.log("Ejecutarmer cuando se termine bien");
}, function () {
    console.error("Ejecutar si todo sale mal");
});
console.log("Paso 2");
