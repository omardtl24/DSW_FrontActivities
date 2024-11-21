import { Component, Input, OnInit } from '@angular/core';
import { Paciente } from '../paciente';

@Component({
  selector: 'app-detail-paciente',
  templateUrl: './detail-paciente.component.html',
  styleUrls: ['./detail-paciente.component.css']
})
export class DetailPacienteComponent implements OnInit {

  //@Input() pacienteDetail: Paciente;

  constructor() { }

  ngOnInit() {
  }

}
