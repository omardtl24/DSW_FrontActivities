import { Serie } from "./serie.js";
import { series } from "./data.js";

let seriesTable: HTMLElement = document.getElementById("seriesTable")!;
let leftZone: HTMLElement = document.getElementById("left-zone")!;
showSeries(series);
displayMean(series);

function displayMean(series:Serie[]): void{
    let meanInfo = document.createElement("p");
    meanInfo.innerHTML = `Seasons average: ${getSeasonsMean(series)}`
    leftZone.appendChild(meanInfo);
}

function getSeasonsMean(series:Serie[]):number{
    let s:number = series.reduce((accum,serie) => accum+serie.temporadas , 0);
    return s/series.length;
}

function showSeries(series:Serie[]):void{
    let tbodySeries = document.createElement("tbody");
    for(let serie of series){
        let trElement:HTMLElement = document.createElement("tr");
        trElement.innerHTML = `<td>${serie.id}</td>
        <td><a href=>${serie.nombre}</a></td>
        <td>${serie.canal}</td>
        <td>${serie.temporadas}</td>`;
        tbodySeries.appendChild(trElement);
    }
    seriesTable.appendChild(tbodySeries);
}

console.log(getSeasonsMean(series));