import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario-model';

@Injectable({
    providedIn: 'root'
})
export class CadastroService {

    cadastrar(usuario: UsuarioModel) {
        localStorage.setItem('usuario', JSON.stringify(usuario));
    }
}