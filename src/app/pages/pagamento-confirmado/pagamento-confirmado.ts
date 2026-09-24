import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Sidebar } from '../../componentes/sidebar/sidebar';

@Component({
    selector: 'app-pagamento-confirmado',
    imports: [CommonModule, RouterLink, Sidebar],
    templateUrl: './pagamento-confirmado.html',
    styleUrl: './pagamento-confirmado.css'
})
export class PagamentoConfirmado {

    plano = '';
    valor = 0;

    constructor(private route: ActivatedRoute) {}

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.plano = params['plano'];
            this.valor = Number(params['valor']);
        });
    }
}