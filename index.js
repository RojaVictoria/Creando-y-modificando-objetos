function Consultorio(nombre, pacientes) {
    this.nombre = nombre;
    this.pacientes = pacientes || [];
};

Consultorio.prototype.agregarPaciente = function (paciente) {
    this.pacientes.push(paciente);
};

function Paciente(nombre, edad, rut, diagnostico) {
    var _nombre = nombre;
    var _edad = edad;
    var _rut = rut;
    var _diagnostico = diagnostico;

    Object.defineProperty(this, "nombre", {
        enumerable: true,
        get: function () {
          return _nombre;
        },
        set: function (nuevoNombre) {
          _nombre = nuevoNombre;
        },
    });
    
    Object.defineProperty(this, "edad", {
        enumerable: true,
        get: function () {
          return _edad;
        },
        set: function (nuevaEdad) {
          _edad = nuevaEdad;
        },
    });
    
    Object.defineProperty(this, "rut", {
        enumerable: true,
        get: function () {
          return _rut;
        },
        set: function (nuevoRut) {
          _rut = nuevoRut;
        },
    });
    
    Object.defineProperty(this, "diagnostico", {
        enumerable: true,
        get: function () {
          return _diagnostico;
        },
        set: function (nuevoDiagnostico) {
          _diagnostico = nuevoDiagnostico;
        },
    });
};

Consultorio.prototype.buscarPaciente = function (nombrePacienteABuscar) {
    var indice = -1;
  
    for (var i = 0; i < this.pacientes.length; i++) {
      if (this.pacientes[i].nombre == nombrePacienteABuscar) {
        indice = i;
      }
    }
  
    if (indice >= 0) {
      console.log(
        "Paciente encontrado, sus datos son: ",
        JSON.parse(JSON.stringify(this.pacientes[indice]))
      );
    } else {
      console.log("Paciente no encontrado, intenta con otro nombre.");
    }
};

Consultorio.prototype.todosLosPacientes = function() {
    console.log(JSON.parse(JSON.stringify(this.pacientes)));
};

//Son mis gatos 
const Paciente1 = new Paciente ("Bruno", 7, "2.222.222-2", "Maldad");
const Paciente2 = new Paciente ("Miguel", 3, "1.111.111-1", "Mocos");
const Paciente3 = new Paciente ("Alicia", 8, "5.555.555-5", "Mucho pelo");

const ConsultorioLoCastro = new Consultorio ("Lo Castro", [Paciente1, Paciente2, Paciente3]);

ConsultorioLoCastro.todosLosPacientes();
ConsultorioLoCastro.buscarPaciente("Bruno");
ConsultorioLoCastro.buscarPaciente("Miguel");
ConsultorioLoCastro.buscarPaciente("Alicia");
ConsultorioLoCastro.buscarPaciente("Pimienta");