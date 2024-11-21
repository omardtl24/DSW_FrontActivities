import { Component, OnInit } from '@angular/core';
import { Paciente } from '../paciente';
import { PacienteService } from '../paciente.service';

@Component({
  selector: 'app-list-pacientes',
  templateUrl: './list-pacientes.component.html',
  styleUrls: ['./list-pacientes.component.css'],
  standalone: false
})
export class ListPacientesComponent implements OnInit {

  constructor(private pacienteService: PacienteService) { }
  pacientes: Paciente[] = [];

  getPacientes() {
    this.pacienteService.getPacientes().subscribe( pacientes => {
      this.pacientes = pacientes;
    }
    );

    console.log(this.pacientes);
  }

  ngOnInit() {
    this.getPacientes();
  }

}
