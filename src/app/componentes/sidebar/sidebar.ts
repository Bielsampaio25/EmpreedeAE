import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
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

    constructor(
        private cadastroService: CadastroService,
        private router: Router
    ) {}

    ngOnInit() {
        this.atualizarPerfil();
    }

    atualizarPerfil() {
        const usuarioSalvo = this.cadastroService.buscarUsuario();

        if (usuarioSalvo) {
            this.usuario = usuarioSalvo;
        }
    }

    logout() {
    localStorage.removeItem('autenticado');
    localStorage.removeItem('usuario');
    localStorage.removeItem('perfil');

    this.router.navigate(['/login']);
}
}