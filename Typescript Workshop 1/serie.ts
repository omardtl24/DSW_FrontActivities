export class Serie{
    constructor(private id: number, 
                private nombre:string, 
                private canal:string, 
                private temporadas: number,
                private resumen: string,
                private url: string,
                private imagenUrl: string){}
}