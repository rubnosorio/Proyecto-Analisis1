export class Publicacion {
    id_publicacion: number
    publicacion: string
    fecha:string
    id_clase:number
    id_usuario:number
    
    constructor(
    _id_publicacion: number,
    _publicacion: string,
    _fecha:string,
    _id_clase:number,
    _id_usuario:number
    ){
        this.id_publicacion=_id_publicacion;
        this.publicacion=_publicacion;
        this.fecha=_fecha;
        this.id_clase=_id_clase;
        this.id_usuario=_id_usuario;
    }
}
