import { Injectable } from '@angular/core';
import { SiteModel } from '../models/siteModel';

@Injectable({
    providedIn: 'root'
})
export class SiteService {

    private chave = 'site';

    salvarSite(site: SiteModel) {
        localStorage.setItem(this.chave, JSON.stringify(site));
    }

    buscarSite(): SiteModel | null {
        const dados = localStorage.getItem(this.chave);

        if (!dados) {
            return null;
        }

        return JSON.parse(dados);
    }
}
