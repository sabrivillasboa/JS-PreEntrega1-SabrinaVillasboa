alert("Bienvenido! Selecciona los productos que deseas comprar: Campera, Pantalon, Sweter o Bufanda");


const productos=() => {
    productoIngresado= prompt("Ingrese un producto:");
    costo= 0;

    switch (productoIngresado){
        case "campera":
            costo= 500;
            break;
        case "pantalon":
            costo= 400;
            break;
        case "sweter":
            costo= 300;
            break;
        case "bufanda":
            costo= 200;
            break;
    }

    if (costo<=0) {
        alert ("Ingresaste un producto invalido");
    } else {
        alert(`El costo es de $ ${costo}`); 
    };
};
    

const productos1=() => {
    productoIngresado= prompt("Si desea otro producto, ingreselo a continuacion:");
    costo1= 0;

    switch (productoIngresado){
        case "campera":
            costo1= 500;
            break;
        case "pantalon":
            costo1= 400;
            break;
        case "sweter":
            costo1= 300;
            break;
        case "bufanda":
            costo1= 200;
            break;
    };

    if (costo1<=0) {
        alert ("Ingresaste un producto invalido");
    } else {
        alert(`El costo es de $ ${costo1}`); 
    };

};

function resultado(){
    let suma = costo + costo1;
    alert(`El costo total es de $ ${suma}`);
}

productos();
productos1();
resultado();


