export class EntregarTarea {
    id_usuario: number
    id_clase: number
    id_tarea: number
    url_tarea: string
    nombre: string
    archivo: string
    nota: number

    constructor(
        _id_usuario: number,
        _id_clase: number,
        _id_tarea: number,
        _url_tarea: string,
        _nombre: string,
        _archivo: string,
        _nota: number,
    ) {
        this.id_usuario = _id_usuario
        this.id_clase = _id_clase
        this.id_tarea = _id_tarea
        this.url_tarea = _url_tarea
        this.nombre = _nombre
        this.archivo = _archivo
        this.nota = _nota
    }
}
