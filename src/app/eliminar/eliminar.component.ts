import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eliminar',
  standalone: true,
  imports: [],
  templateUrl: './eliminar.component.html',
  styleUrl: './eliminar.component.css'
})
export class EliminarComponent {

  constructor(private router: Router){    
  }
  home(){
    this.router.navigate(['']);
  }
}
