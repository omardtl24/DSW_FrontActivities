import { series } from "./data.js";
var seriesTable = document.getElementById("seriesTable");
var leftZone = document.getElementById("left-zone");
var rightZone = document.getElementById("right-zone");
showSeries(series);
displayMean(series);
var links = document.querySelectorAll('.serie-link');
links.forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault();
        var target = event.target;
        var id = target.getAttribute('data-id');
        if (id) {
            console.log(id);
            var selectedSerie = series.filter(function (s) { return s.id === Number(id); });
            if (selectedSerie.length > 0) {
                console.log(selectedSerie[0]);
                showSerieDetails(selectedSerie[0]);
            }
        }
    });
});
function displayMean(series) {
    var meanInfo = document.createElement("p");
    meanInfo.innerHTML = "Seasons average: ".concat(getSeasonsMean(series));
    leftZone.appendChild(meanInfo);
}
function getSeasonsMean(series) {
    var s = series.reduce(function (accum, serie) { return accum + serie.temporadas; }, 0);
    return s / series.length;
}
function showSeries(series) {
    var tbodySeries = document.createElement("tbody");
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n        <td><a href=\"#\" class=\"serie-link\" data-id = ").concat(serie.id, ">").concat(serie.nombre, "</a></td>\n        <td>").concat(serie.canal, "</td>\n        <td>").concat(serie.temporadas, "</td>");
        tbodySeries.appendChild(trElement);
    }
    seriesTable.appendChild(tbodySeries);
}
function showSerieDetails(serie) {
    var card = document.getElementById('serieDetailsCard');
    var serieImage = document.getElementById('serieImage');
    var serieName = document.getElementById('serieName');
    var serieSummary = document.getElementById('serieSummary');
    var serieLink = document.getElementById('serieLink');
    serieImage.setAttribute("src", serie.imagenUrl);
    serieName.innerHTML = serie.nombre;
    serieSummary.innerHTML = serie.resumen;
    serieLink.setAttribute("href", serie.url);
    serieLink.innerHTML = serie.url;
    card.style.display = 'block';
}
console.log(getSeasonsMean(series));
