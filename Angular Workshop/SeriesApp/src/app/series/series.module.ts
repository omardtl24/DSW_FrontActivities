import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ListSeriesComponent } from './list-series/list-series.component';
import { SeriesService } from './series.service';

@NgModule({
  declarations: [
    ListSeriesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [SeriesService],
  exports: [ListSeriesComponent]
})
export class SeriesModule { }
