import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacientesComponent } from './pacientes.component';
import { ListPacientesComponent } from './list-pacientes/list-pacientes.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PacientesComponent,
    ListPacientesComponent
  ],
  exports : [PacientesComponent, ListPacientesComponent]
})
export class PacientesModule { }
