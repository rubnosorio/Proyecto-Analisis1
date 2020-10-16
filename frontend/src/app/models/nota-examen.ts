export class NotaExamen {

    id_examen:number;
    examen:string;
    nota:number;

    constructor(_id_examen:number, _examen:string, _nota:number){
        this.id_examen=_id_examen;
        this.examen=_examen;
        this.nota=_nota;
    }

}
