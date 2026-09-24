import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteService } from '../../services/site-service';


@Component({
    selector: 'app-site-preview',
    imports: [CommonModule],
    templateUrl: './site-preview.html',
    styleUrl: './site-preview.css'
})
export class SitePreview {

    site: any = null;
    anoAtual = new Date().getFullYear();

    cardAtual = 0;
    intervaloCarrossel: any;

    constructor(private siteService: SiteService) {}

    ngOnInit() {
        this.site = this.siteService.buscarSite();

        this.iniciarCarrossel();
    }

    iniciarCarrossel() {
        if (!this.site?.cardsCarrossel?.length || this.site.cardsCarrossel.length <= 1) {
            return;
        }

        this.intervaloCarrossel = setInterval(() => {
            this.proximoCard();
        }, 5000);
    }

    proximoCard() {
        if (!this.site?.cardsCarrossel?.length) {
            return;
        }

        this.cardAtual =
            (this.cardAtual + 1) % this.site.cardsCarrossel.length;
    }

    cardAnterior() {
        if (!this.site?.cardsCarrossel?.length) {
            return;
        }

        this.cardAtual =
            (this.cardAtual - 1 + this.site.cardsCarrossel.length) %
            this.site.cardsCarrossel.length;
    }

    selecionarCard(index: number) {
        this.cardAtual = index;
    }

    ngOnDestroy() {
        if (this.intervaloCarrossel) {
            clearInterval(this.intervaloCarrossel);
        }
    }
}