import { Component } from '@angular/core';
import { Router, RouterLink, NavigationEnd } from '@angular/router';
import { CadastroService } from '../../services/cadastro-service';
import { UsuarioModel } from '../../models/usuario-model';
import { filter } from 'rxjs';

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

        this.router.events
            .pipe(
                filter(event => event instanceof NavigationEnd)
            )
            .subscribe(() => {
                this.atualizarPerfil();
            });
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