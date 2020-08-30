export class Examen {
    id_examen: number
    titulo: string
    fecha_creacion: string
    descripcion: string
    
    constructor(
        _id_examen: number,
        _titulo: string,
        _fecha_creacion: string,
        _descripcion: string
    ) {
        this.id_examen = _id_examen
        this.titulo = _titulo
        this.fecha_creacion = _fecha_creacion
        this.descripcion = _descripcion
    }
}
