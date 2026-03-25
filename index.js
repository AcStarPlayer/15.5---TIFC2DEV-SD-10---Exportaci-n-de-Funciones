const { Usuario, UsuarioVIP } = require("./usuario");
const { Producto, ProductoDigital } = require("./producto");

const cliente = new Usuario("Brayan", "brayanc@gmail.com");
const admin = new Usuario("Andres", "andresc@gmail.com", "administrador");
const vip = new UsuarioVIP("Carlos", "carlos.vip@gmail.com", "BlackGold");

cliente.desactivar();

const p1 = new Producto("Camiseta Oversize", 75000, "Ropa");
const p2 = new Producto("AirPodsPro2", 870000, "Tecnologia");

const d1 = new ProductoDigital("BootCamp G", 130000, "Mensual");
const d2 = new ProductoDigital("Videojuego MineCraft", 29900, "Ilimitado");

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