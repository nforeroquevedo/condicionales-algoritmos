let enchufle = false

enchufle ? console.log("esta encendido") : console.log("esta apagado");

let edad = 19

edad >= 18 ? console.log("Es mayor de edad") : console.log("Es menor de edad");

let numero = -3

numero > 0 ? console.log("numero positivo") : console.log("numero negativo");

let ocupacionCancha = true
let cancha = "Bernabeu"

let mensaje = ocupacionCancha ? `la cancha llamada ${cancha} esta ocupada` : `la cancha llamada ${cancha} esta disponible`
console.log(mensaje);

const email = "arleth64@gmail.com"
const contrasena = "1234"

email == "arleth64@gmail.com" && contrasena == "1234" ? console.log(`senor usuario con correro ${email} bienvenido al sistema`) : console.log(`El correo ${email} y la contrasena digitada es incorrecta`);

let colorSemaforo = "amarillo "
colorSemaforo == "verde" ? console.log(`El semaforo esta en ${colorSemaforo} puede seguir`) : 
colorSemaforo == "rojo" ?  console.log(`El semaforo esta en ${colorSemaforo} debe parar`) : 
colorSemaforo == "amarillo" ? console.log(`aliste motores`) : console.log(`muestra color ${colorSemaforo}, esta danado`);;

let temperatura = 40 
if(temperatura >= 40 ) {
    console.log(`usted tiene fiebre, su temperatura es mayor a ${temperatura} grados`);
}

let tipoCliente = "normal" 
if(tipoCliente == "normal" ) {
    console.log(`va a ser atendido en el modulo 1, por ser cliente ${tipoCliente}`);
} else if (tipoCliente = "preferencial") {
    console.log(`esta habilitados los modulos 2 y 3 para su atencion`)
} else {
    console.log("Usted no es cliente del banco, por favor dirijase al modulo 4");
}

let emailBaseDatos = "arleth64@gmail.com"
let claveBaseDatos = "1234*"
let emailIngresado = "arle@gmail.com"
let claveIngresada = "1234*"
let nombreUsuario = "Juan"

if (emailBaseDatos == emailIngresado && claveBaseDatos == claveIngresada) {
    console.log(`${nombreUsuario} bienvenido!, seleccione opciones del sistema`);
} else {
    console.log("Acceso denegado!");
}

let derecha = true
let izquierda = false
let arriba = false
let abajo = false

if(derecha) {
    console.log("robot moviendose hacia la derecha");
} else if (izquierda) {
    console.log("robot moviendose hacia la izquierda");
} else if (arriba) {
    console.log("robot moviendose hacia arriba");
} else {
    console.log("robot moviendose hacia abajo");
}

let encendido = true 
let velocidad = 32 
if(encendido) {
    console.log(`Su carro esta encendido`);
    if(velocidad == 0) {
        console.log("carro freno");
    } else if (velocidad > 0 && velocidad <= 100) {
        console.log("carro en marcha...");
    } else {
        console.log("evitese un accidente... exceso de velocidad");
    }
} else {
    console.log("Encienda su vehiculo...");
}

let dia = "miercoles"
let clase = "Algoritmos"
if (dia == "miercoles") {
    console.log(`la clase de hoy es ${clase}`);
}