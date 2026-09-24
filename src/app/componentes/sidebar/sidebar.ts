import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CadastroService } from '../../services/cadastro-service';
import { UsuarioModel } from '../../models/usuario-model';

@Component({
    selector: 'app-sidebar',
    imports: [RouterLink],
    templateUrl: './sidebar.html',
    styleUrl: './sidebar.css'
})
export class Sidebar {

    usuario: UsuarioModel = {
        nome: '',
        email: '',
        senha: ''
    };

    constructor(private cadastroService: CadastroService) {}

    ngOnInit() {
        this.atualizarPerfil();
    }

    atualizarPerfil() {
        const usuarioSalvo = this.cadastroService.buscarUsuario();

        if (usuarioSalvo) {
            this.usuario = usuarioSalvo;
        }
    }
}
