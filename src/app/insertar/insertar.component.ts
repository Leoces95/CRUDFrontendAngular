import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Preguntas } from '../preguntas';
import { PreguntasCRUDService } from '../preguntas-crud.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-insertar',
  standalone: true,
  templateUrl: './insertar.component.html',
  styleUrls: ['./insertar.component.css'], 
  imports: [FormsModule]
})
export class InsertarComponent implements OnInit {
  nuevaPregunta: Preguntas = { pregunta: '', respuesta: '', estado: '' }; 

  constructor(private router: Router, private preguntasServicio: PreguntasCRUDService) { }

  ngOnInit(): void {
    // Aquí puedes inicializar algo si es necesario
  }

  home() {
    this.router.navigate(['']);
  }

  insertarPregunta(): void {
    this.preguntasServicio.insertarPregunta(this.nuevaPregunta).subscribe(
      response => {
        console.log('Pregunta insertada', response);
        this.router.navigate(['/consultar']); // Redirige a la lista de preguntas
      },
      error => {
        console.error('Error al insertar pregunta', error);
      }
    );
  }
}
