import { Component } from '@angular/core';
import { Sidebar } from '../../componentes/sidebar/sidebar';

@Component({
  selector: 'app-editar-site',
  imports: [Sidebar],
  templateUrl: './editar-site.html',
  styleUrl: './editar-site.css'
})
export class EditarSite {
  anoAtual = new Date().getFullYear();
}
