export class Servicio {
    name_serv:       string = '';
    fecha:           Date = new Date();
    descripcion:     string = '';
    recomendaciones: string = '';
    partes:          string = '';
    horas_serv:      string = '';
    equipo_id:       EquipoID = {
        id: 0
    };
}

export interface EquipoID {
    id: number;

}
