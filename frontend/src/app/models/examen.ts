export class Examen {
    id_examen: number
    nombre_examen: string
    fecha: string
    descripcion: string
    num_preguntas: number
    valor_examen: number
    estado: number
    id_clase: number
    preguntas: string

    constructor(
        _id_examen: number,
        _nombre_examen: string,
        _fecha: string,
        _descripcion: string,
        _num_preguntas: number,
        _valor_examen: number,
        _estado: number,
        _id_clase: number,
        _preguntas: string
    ) {
        this.id_examen = _id_examen
        this.nombre_examen = _nombre_examen
        this.fecha = _fecha
        this.descripcion = _descripcion
        this.num_preguntas = _num_preguntas
        this.valor_examen = _valor_examen
        this.estado = _estado
        this.id_clase = _id_clase
        this.preguntas = _preguntas
    }
}
