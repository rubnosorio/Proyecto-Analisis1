import { NotaTarea } from './nota-tarea'
import { NotaExamen } from './nota-examen'

export class NotaEstudiante {
    id_estudiante:number
    nombres:string
    apellidos:string
    lista_tareas: NotaTarea[]
    lista_examenes:NotaExamen[]

    constructor(_id_estudiante:number, _nombres:string, _apellidos:string, _lista_tarea:NotaTarea[], _lista_examen:NotaExamen[]){
        this.id_estudiante=_id_estudiante;
        this.nombres=_nombres;
        this.apellidos=_apellidos;
        this.lista_tareas=_lista_tarea;
        this.lista_examenes=_lista_examen;
    }
}
