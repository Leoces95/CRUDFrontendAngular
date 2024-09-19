import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  constructor(private router: Router){    
  }

  consultar(){    
    this.router.navigate(['/consultar']);   
  }
  insertar(){
    this.router.navigate(['/insertar']);
  }
  actualizar(){
    this.router.navigate(['/actualizar']);
  }
  eliminar(){
    this.router.navigate(['/eliminar']);
  }
}
