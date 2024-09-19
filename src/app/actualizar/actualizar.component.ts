import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizar',
  standalone: true,
  imports: [],
  templateUrl: './actualizar.component.html',
  styleUrl: './actualizar.component.css'
})
export class ActualizarComponent {
  constructor(private router: Router){    
  }
  home(){
    this.router.navigate(['']);
  }
}
