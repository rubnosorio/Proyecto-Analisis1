export class Usuario {
    id_usuario: number
    nombres: string
    apellidos: string
    username: string
    passwd: string
    correo: string
    constructor(
        _id_usuario: number,
        _nombres: string,
        _apellidos: string,
        _username: string,
        _passwd: string,
        _correo: string,
    ) {
        this.id_usuario = _id_usuario
        this.nombres = _nombres
        this.apellidos = _apellidos
        this.username = _username
        this.passwd = _passwd
        this.correo = _correo
    }

}
