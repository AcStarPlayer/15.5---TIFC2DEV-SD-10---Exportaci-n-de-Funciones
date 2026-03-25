class Usuario {
  constructor(nombre, email, rol = "cliente") {
    this.nombre = nombre;
    this.email = email;
    this.rol = rol;
    this.activo = true;
  }

  saludo() {
    return `Hola, soy ${this.nombre} y mi rol es ${this.rol}.`;
  }

  desactivar() {
    this.activo = false;
    return `La cuenta de ${this.nombre} fue desactivada.`;
  }

  resumen() {
    return `Nombre: ${this.nombre}, Email: ${this.email}, Rol: ${this.rol}, Estado: ${
      this.activo ? "Activo" : "Inactivo"
    }`;
  }
}

class UsuarioVIP extends Usuario {
  constructor(nombre, email, membresia) {
    super(nombre, email, "cliente VIP");
    this.membresia = membresia;
  }

  saludo() {
    return `${super.saludo()} Membresía: ${this.membresia}.`;
  }

  beneficios() {
    return `Beneficios ${this.membresia}: descuentos exclusivos.`;
  }
}

module.exports = { Usuario, UsuarioVIP };