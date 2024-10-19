import {Aprendiz, NivelEducativo} from './aprendiz.js';
import { Curso } from './curso.js';

let cursos = [
    new Curso("Cocina Internacional",13,4.7,true,2021),
    new Curso("Sobreviviendo a javaScript",30,3.0,true,2022),
    new Curso("Principios del FrontEnd",32,2.5,false,2023)
]

export const ap = new Aprendiz("Luke","Skywalker","avatar.png",23,NivelEducativo.POSGRADO,cursos);
console.log(ap.cursos);

let aprendizTable: HTMLElement = document.getElementById("aprendiz")!;
let estadisticas: HTMLElement = document.getElementById("estadisticas")!;
let cursosTable: HTMLElement = document.getElementById("cursos")!;
let btnFiltro: HTMLElement = document.getElementById("boton-filtro")!;
let textoBusqueda: HTMLInputElement = <HTMLInputElement>document.getElementById("texto-busqueda")!;


btnFiltro.onclick = () => {
    let text:string = textoBusqueda.value;
    text = (text==null)?"":text;
    cursosTable.getElementsByTagName("tbody")[0].remove();
    let cursosFiltrados: Curso[] = ap.cursos.filter(c => c.nombre.match(text));
    mostrarCursosAprendiz(cursosFiltrados);
}

mostrarDatosAprendiz(ap);
mostrarEstadisticas(ap);
mostrarCursosAprendiz(ap.cursos);

function mostrarDatosAprendiz(ap: Aprendiz):void{
    let tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML = `<tr><td colspan=2><img src="./${ap.avatar}" height="100"></td></tr>
    <tr><td>Nombres: </td><td>${ap.nombres}</td></tr>
    <tr><td>Apellidos: </td><td>${ap.apellidos}</td></tr>
    <tr><td>Nivel Educativo: </td><td>${ap.nivelEducativo}</td></tr>
    <tr><td>Edad: </td><td>${ap.edad}</td></tr>`
    aprendizTable.appendChild(tbodyAprendiz);
}

function mostrarEstadisticas(ap: Aprendiz):void{
    let numeroCertificados:number = ap.darCursosCertificados();
    let trElement:HTMLElement = document.createElement("tr");

    trElement.innerHTML = `<td><b>Cursos Certificados</b></td><td>${numeroCertificados}</td>`;
    estadisticas.appendChild(trElement);
    
}

function mostrarCursosAprendiz(cursos: Curso[]): void{
    let cursosTbody: HTMLElement = document.createElement("tbody");
    for(let curso of cursos){
        let trElement:HTMLElement = document.createElement("tr");
        trElement.innerHTML = `<td>${curso.nombre}</td>
        <td>${curso.horas}</td>
        <td>${curso.calificacion}</td>
        <td>${curso.certificado}</td>
        <td>${curso.anio}</td>`;
        cursosTbody.appendChild(trElement);
    }
    cursosTable.appendChild(cursosTbody);
}