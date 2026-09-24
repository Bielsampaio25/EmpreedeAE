import { Injectable } from '@angular/core';
import { SiteModel } from '../models/siteModel';

@Injectable({
    providedIn: 'root'
})
export class SiteService {

    salvarSite(site: SiteModel) {

        const usuario = localStorage.getItem('usuario');

        if (!usuario) {
            return;
        }

        const dadosUsuario = JSON.parse(usuario);
        const chave = 'site_' + dadosUsuario.email;

        localStorage.setItem(chave, JSON.stringify(site));
    }

    buscarSite(): SiteModel | null {

        const usuario = localStorage.getItem('usuario');

        if (!usuario) {
            return null;
        }

        const dadosUsuario = JSON.parse(usuario);
        const chave = 'site_' + dadosUsuario.email;

        const dados = localStorage.getItem(chave);

        if (!dados) {
            return null;
        }

        return JSON.parse(dados);
    }
}