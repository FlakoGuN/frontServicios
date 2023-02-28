export class Servicio {
    id:              number = 0;
    name_serv:       string = '';
    fecha:           Date = new Date();
    descripcion:     string = '';
    recomendaciones: string = '';
    partes:          string = '';
    horas_serv:      string = '';
    equipo_id:       EquipoID = {
        id: 0,
        equipo: '',
        modelo: '',
        serial: '',
        contador: 0,
        cliente_id: {
            id: 0,
            empresa: '',
            rut: '',
            direccion: '',
            contacto: []
        }
    };
}

export interface EquipoID {
    id:         number;
    equipo:     string;
    modelo:     string;
    serial:     string;
    contador:   number;
    cliente_id: ClienteID;
}

export interface Contacto {
    id:         number;
    nombre:     string;
    apellido:   string;
    correo:     string;
    telefono:   string;
    cliente_id: ClienteID;
}

export interface ClienteID {
    id:        number;
    empresa:   string;
    rut:       string;
    direccion: string;
    contacto: Contacto[];
}
