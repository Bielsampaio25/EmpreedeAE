import { Component } from '@angular/core';
import { Sidebar } from '../../componentes/sidebar/sidebar';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-pagamento',
    imports: [Sidebar, RouterLink],
    templateUrl: './pagamento.html',
    styleUrl: './pagamento.css'
})
export class Pagamento {

    metodoSelecionado = 'pix';

    selecionarMetodo(metodo: string) {
        this.metodoSelecionado = metodo;
    }
}
