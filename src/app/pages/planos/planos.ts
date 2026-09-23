import { Component } from '@angular/core';
import { Sidebar } from '../../componentes/sidebar/sidebar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-planos',
  imports: [Sidebar, RouterLink],
  templateUrl: './planos.html',
  styleUrl: './planos.css',
})
export class Planos {

}
