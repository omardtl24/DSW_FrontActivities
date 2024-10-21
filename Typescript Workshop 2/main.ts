import { Serie } from "./serie.js";
import { series } from "./data.js";

let seriesTable: HTMLElement = document.getElementById("seriesTable")!;
let leftZone: HTMLElement = document.getElementById("left-zone")!;
let rightZone: HTMLElement = document.getElementById("right-zone")!;
showSeries(series);
displayMean(series);

const links = document.querySelectorAll('.serie-link');
  links.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const target = event.target as HTMLElement;
      const id = target.getAttribute('data-id');
      if (id) {
        console.log(id);
        const selectedSerie = series.filter(s => s.id === Number(id));
        if (selectedSerie.length > 0) {
            console.log(selectedSerie[0]);
          showSerieDetails(selectedSerie[0]);
        }
      }
    });
});

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
        <td><a href="#" class="serie-link" data-id = ${serie.id}>${serie.nombre}</a></td>
        <td>${serie.canal}</td>
        <td>${serie.temporadas}</td>`;
        tbodySeries.appendChild(trElement);
    }
    seriesTable.appendChild(tbodySeries);
}

function showSerieDetails(serie: Serie): void {
    const card : HTMLElement = document.getElementById('serieDetailsCard')!;
    const serieImage : HTMLElement = document.getElementById('serieImage')!;
    const serieName : HTMLElement = document.getElementById('serieName')!;
    const serieSummary : HTMLElement = document.getElementById('serieSummary')!;
    const serieLink : HTMLElement = document.getElementById('serieLink')!;

    serieImage.setAttribute("src", serie.imagenUrl);
    serieName.innerHTML = serie.nombre;
    serieSummary.innerHTML = serie.resumen;
    serieLink.setAttribute("href", serie.url);
    serieLink.innerHTML = serie.url;
    
    card.style.display = 'block';
}

console.log(getSeasonsMean(series));