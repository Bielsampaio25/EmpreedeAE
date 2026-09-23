import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UsuarioModel } from '../../models/usuario-model';
import { FormsModule } from '@angular/forms';
import { CadastroService } from '../../services/cadastro-service';

@Component({
    selector: 'app-cadastro',
    imports: [RouterLink, FormsModule],
    templateUrl: './cadastro.html',
    styleUrl: './cadastro.css',
})
export class Cadastro {

    usuario: UsuarioModel = {
        nome: '',
        email: '',
        senha: ''
    };

    constructor(
        private cadastroService: CadastroService,
        private router: Router
    ) {}

    cadastrar() {
    this.cadastroService.cadastrar(this.usuario);

    console.log('Usuário cadastrado:', this.usuario);

    this.router.navigate(['/login']);
}
}
