import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Sidebar } from '../../componentes/sidebar/sidebar';

@Component({
    selector: 'app-pagamento',
    imports: [CommonModule, RouterLink, Sidebar],
    templateUrl: './pagamento.html',
    styleUrl: './pagamento.css'
})
export class Pagamento {

    metodoSelecionado = 'pix';

    plano = '';
    valor = 0;

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) {}

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.plano = params['plano'];
            this.valor = Number(params['valor']);

            if (!this.plano || !this.valor) {
                this.router.navigate(['/planos']);
            }
        });
    }

    selecionarMetodo(metodo: string) {
        this.metodoSelecionado = metodo;
    }
}
