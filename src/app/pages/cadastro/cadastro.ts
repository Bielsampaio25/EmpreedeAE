import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { UsuarioModel } from '../../models/usuario-model';
import { FormsModule } from '@angular/forms';
import { CadastroService } from '../../services/cadastro-service';

@Component({
    selector: 'app-cadastro',
    imports: [RouterLink, FormsModule],
    templateUrl: './cadastro.html',
    styleUrl: './cadastro.css'
})
export class Cadastro {

    usuario: UsuarioModel = {
        nome: '',
        email: '',
        senha: ''
    };

    aceitouTermos = false;

    constructor(
        private cadastroService: CadastroService,
        private router: Router
    ) { }

    cadastrar() {

        if (
            !this.usuario.nome.trim() ||
            !this.usuario.email.trim() ||
            !this.usuario.senha.trim()
        ) {
            alert('Preencha todos os campos.');
            return;
        }

        if (this.usuario.senha.length !== 6) {
            alert('A senha deve ter exatamente 6 caracteres.');
            return;
        }

        if (!this.aceitouTermos) {
            alert('Você precisa aceitar os Termos de Uso e a Política de Privacidade.');
            return;
        }

        this.cadastroService.cadastrar(this.usuario);
        this.router.navigate(['/login']);
    }
}