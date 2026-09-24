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

        if (
            usuario.email === email &&
            usuario.senha === senha
        ) {
            localStorage.setItem('autenticado', 'true');
            return true;
        }

        return false;
    }
}