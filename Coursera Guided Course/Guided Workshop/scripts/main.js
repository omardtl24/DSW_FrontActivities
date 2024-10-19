import { Aprendiz, NivelEducativo } from './aprendiz.js';
import { Curso } from './curso.js';
var cursos = [
    new Curso("Cocina Internacional", 13, 4.7, true, 2021),
    new Curso("Sobreviviendo a javaScript", 30, 3.0, true, 2022),
    new Curso("Principios del FrontEnd", 32, 2.5, false, 2023)
];
export var ap = new Aprendiz("Luke", "Skywalker", "avatar.png", 23, NivelEducativo.POSGRADO, cursos);
console.log(ap.cursos);
var aprendizTable = document.getElementById("aprendiz");
var estadisticas = document.getElementById("estadisticas");
var cursosTable = document.getElementById("cursos");
var btnFiltro = document.getElementById("boton-filtro");
var textoBusqueda = document.getElementById("texto-busqueda");
btnFiltro.onclick = function () {
    var text = textoBusqueda.value;
    text = (text == null) ? "" : text;
    cursosTable.getElementsByTagName("tbody")[0].remove();
    var cursosFiltrados = ap.cursos.filter(function (c) { return c.nombre.match(text); });
    mostrarCursosAprendiz(cursosFiltrados);
};
mostrarDatosAprendiz(ap);
mostrarEstadisticas(ap);
mostrarCursosAprendiz(ap.cursos);
function mostrarDatosAprendiz(ap) {
    var tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML = "<tr><td colspan=2><img src=\"./".concat(ap.avatar, "\" height=\"100\"></td></tr>\n    <tr><td>Nombres: </td><td>").concat(ap.nombres, "</td></tr>\n    <tr><td>Apellidos: </td><td>").concat(ap.apellidos, "</td></tr>\n    <tr><td>Nivel Educativo: </td><td>").concat(ap.nivelEducativo, "</td></tr>\n    <tr><td>Edad: </td><td>").concat(ap.edad, "</td></tr>");
    aprendizTable.appendChild(tbodyAprendiz);
}
function mostrarEstadisticas(ap) {
    var numeroCertificados = ap.darCursosCertificados();
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td><b>Cursos Certificados</b></td><td>".concat(numeroCertificados, "</td>");
    estadisticas.appendChild(trElement);
}
function mostrarCursosAprendiz(cursos) {
    var cursosTbody = document.createElement("tbody");
    for (var _i = 0, cursos_1 = cursos; _i < cursos_1.length; _i++) {
        var curso = cursos_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(curso.nombre, "</td>\n        <td>").concat(curso.horas, "</td>\n        <td>").concat(curso.calificacion, "</td>\n        <td>").concat(curso.certificado, "</td>\n        <td>").concat(curso.anio, "</td>");
        cursosTbody.appendChild(trElement);
    }
    cursosTable.appendChild(cursosTbody);
}
