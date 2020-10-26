export class TareasUsuarioClase {
    id_clase: number
    id_tarea: number
    id_usuario: number
    nombre_tarea: string
    url_archivo_tarea: string
    valor_tarea:number
    estado: string
    fecha_entrega:string
    descripcion: string

    constructor(_id_clase:number, _id_tarea:number, _id_usuario:number,
        _nombre_tarea:string, _url_archivo_tarea:string,
        _valor_tarea:number, _estado:string,_fecha_entrega:string,
        _descripcion:string){
            this.id_clase=_id_clase;
            this.id_tarea=_id_tarea;
            this.id_usuario=_id_usuario;
            this.nombre_tarea=_nombre_tarea;
            this.url_archivo_tarea=_url_archivo_tarea;
            this.valor_tarea=this.valor_tarea;
            this.estado=_estado;
            this.fecha_entrega=_fecha_entrega;
            this.descripcion=_descripcion;
    }
}
