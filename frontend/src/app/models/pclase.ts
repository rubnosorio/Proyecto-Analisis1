export class PClase {
    id_clase:number
    nombre_clase: string
    cod_acceso: string
    id_usuario: number

    constructor(
        _id_clase: number,
        _nombre_clase: string,
        _cod_acceso: string,
        _id_usuario: number
        ) {
        
        this.id_clase = _id_clase
        this.nombre_clase = _nombre_clase
        this.cod_acceso = _cod_acceso
        this.id_usuario = _id_usuario
    }
}
