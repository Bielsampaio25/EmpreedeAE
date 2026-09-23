import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario-model';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    login(email: string, senha: string): boolean {
        const dados = localStorage.getItem('usuario');

        if (!dados) {
            return false;
        }

        const usuario: UsuarioModel = JSON.parse(dados);

        return usuario.email === email && usuario.senha === senha;
    }

    buscarUsuario(): UsuarioModel | null {
        const dados = localStorage.getItem('usuario');

        if (!dados) {
            return null;
        }

        return JSON.parse(dados);
    }
}
