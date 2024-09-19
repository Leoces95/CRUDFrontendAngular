import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PreguntasCRUDService } from '../preguntas-crud.service';
import { Preguntas } from '../preguntas';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-consultar',
  standalone: true,
  imports: [CommonModule], // Añadir CommonModule aquí
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {

  preguntas$ : Observable<Preguntas[]> = of([]);

  constructor(private router: Router, private preguntasServicio: PreguntasCRUDService) { }   

  home(){
    this.router.navigate(['']);
  }

  ngOnInit(): void {
  this.preguntas$ = this.preguntasServicio.consultarPregunta();
  }  

  
}
