const { Usuario, UsuarioVIP } = require("./usuario");
const { Producto, ProductoDigital } = require("./producto");

const cliente = new Usuario("Brayan", "brayan@mail.com");
const admin = new Usuario("Ana", "ana@mail.com", "administrador");
const vip = new UsuarioVIP("Carlos", "vip@mail.com", "Gold");

cliente.desactivar();

const p1 = new Producto("Camiseta", 50000, "Ropa");
const p2 = new Producto("Audifonos", 120000, "Tecnologia");

const d1 = new ProductoDigital("Curso JS", 80000, "mensual");
const d2 = new ProductoDigital("Videojuego Indie", 45000, "de por vida");

console.log("Descuento 20%:", p1.aplicarDescuento(20)); //DESCUENTO 20%

console.log("\n PRODUCTOS ");
console.log(p1.tarjeta());
console.log(p2.tarjeta());
console.log(d1.tarjeta());
console.log(d2.tarjeta());

console.log("\n USUARIOS ");
console.log(cliente.resumen());
console.log(admin.resumen());
console.log(vip.resumen());