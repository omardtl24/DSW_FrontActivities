import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../series.service';
import { Serie } from '../series.model';

@Component({
  selector: 'app-list-series',
  templateUrl: './list-series.component.html'
})
export class ListSeriesComponent implements OnInit {
  series: Serie[] = [];

  constructor(private seriesService: SeriesService) {}

  ngOnInit(): void {
    this.seriesService.getSeries().subscribe((data: Serie[]) => {
      this.series = data;
    });
  }

  getAverageSeasons(): number {
    const totalSeasons = this.series.reduce((acc, serie) => acc + serie.seasons, 0);
    return this.series.length ? totalSeasons / this.series.length : 0;
  }
}
