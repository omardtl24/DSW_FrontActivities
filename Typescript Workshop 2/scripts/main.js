import { series } from "./data.js";
var seriesTable = document.getElementById("seriesTable");
var leftZone = document.getElementById("left-zone");
showSeries(series);
displayMean(series);
function displayMean(series) {
    var meanInfo = document.createElement("h10");
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
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n        <td><a href=>").concat(serie.nombre, "</a></td>\n        <td>").concat(serie.canal, "</td>\n        <td>").concat(serie.temporadas, "</td>");
        tbodySeries.appendChild(trElement);
    }
    seriesTable.appendChild(tbodySeries);
}
console.log(getSeasonsMean(series));
