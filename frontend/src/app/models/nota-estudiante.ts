import { NotaTarea } from './nota-tarea'

export class NotaEstudiante {
    id_estudiante:number
    nombres:string
    apellidos:string
    lista_tarea: NotaTarea[]

    constructor(_id_estudiante:number, _nombres:string, _apellidos:string, _lista_tarea:NotaTarea[]){
        this.id_estudiante=_id_estudiante;
        this.nombres=_nombres;
        this.apellidos=_apellidos;
        this.lista_tarea=_lista_tarea;
    }
}
