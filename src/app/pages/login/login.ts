import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login-service';

@Component({
    selector: 'app-login',
    imports: [RouterLink, FormsModule],
    templateUrl: './login.html',
    styleUrl: './login.css'
})
export class Login {

    email = '';
    senha = '';
    aceitouTermos = false;

    constructor(
        private loginService: LoginService,
        private router: Router
    ) {}

    entrar() {

        if (!this.aceitouTermos) {
            alert('Você precisa aceitar os termos e condições.');
            return;
        }

        const loginValido = this.loginService.login(
            this.email,
            this.senha
        );

        if (loginValido) {
            this.router.navigate(['/site']);
        } else {
            alert('E-mail ou senha incorretos.');
        }
    }
}