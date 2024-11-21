export class Paciente {
    name: string;
    edad: number;
    diagnostico: string;
    public constructor(
        name: string,
        edad: number,
        diagnostico: string
    ){
        this.name = name;
        this.edad = edad;
        this.diagnostico = diagnostico;
    }
}
