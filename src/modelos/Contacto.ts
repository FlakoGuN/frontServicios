
export class Contacto {
    id:         number = 0;
    nombre:     string = '';
    apellido:   string  = '';
    correo:     string = '';
    telefono:   string = '';
    cliente_id: ClienteID={
        id: 0,
        empresa: "",
        rut: "",
        direccion: ""
    };
}

export interface ClienteID {
    id:        number;
    empresa:   string;
    rut:       string;
    direccion: string;
}