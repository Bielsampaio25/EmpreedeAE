import { Component } from '@angular/core';
import { Sidebar } from '../../componentes/sidebar/sidebar';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pagamento-confirmado',
  imports: [Sidebar, RouterLink],
  templateUrl: './pagamento-confirmado.html',
  styleUrl: './pagamento-confirmado.css',
})
export class PagamentoConfirmado {

}
