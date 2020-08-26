export class Tarea {
    id_tarea: number
    nombre_tarea: string
    descripcion: string
    url_archivo: string
    fecha_entrega: string

    constructor(
        _id_tarea: number,
        _nombre_tarea: string,
        _descripcion: string,
        _url_archivo: string,
        _fecha_entrega: string
    ) {

        this.id_tarea = _id_tarea
        this.nombre_tarea = _nombre_tarea
        this.descripcion = _descripcion
        this.url_archivo = _url_archivo
        this.fecha_entrega = _fecha_entrega
    }
}
