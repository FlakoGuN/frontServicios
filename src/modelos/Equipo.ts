export class Equipo {
    id:         number = 0;
    equipo:     string = '';
    modelo:     string = '';
    serial:     string = '';
    contador:   number = 0;
    cliente_id: ClienteID = {
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