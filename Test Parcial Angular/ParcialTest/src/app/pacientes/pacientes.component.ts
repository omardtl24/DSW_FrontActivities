import { Component, OnInit } from '@angular/core';
import { Paciente } from './paciente';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css'],
  standalone: false
})
export class PacientesComponent implements OnInit {

  paicentes: Paciente[] = [];
  constructor() { }

  ngOnInit() {
  }

}
