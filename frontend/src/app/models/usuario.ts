export class Usuario {
    id_usuario: number
    nombre_usuario: string
    apellido_usuario: string
    username: string
    password: string 
    correo: string

    constructor(id_usuario_:number, nombre_usuario_:string, apellido_usuario_:string, username_:string, password_:string, correo_:string){
        this.id_usuario=id_usuario_;
        this.nombre_usuario=nombre_usuario_;
        this.apellido_usuario=apellido_usuario_;
        this.username=username_;
        this.password=password_;
        this.correo=correo_;
    }
}
