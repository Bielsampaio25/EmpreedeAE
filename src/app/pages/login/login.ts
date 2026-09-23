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

    constructor(
        private loginService: LoginService,
        private router: Router
    ) {}

    entrar() {
        const loginValido = this.loginService.login(this.email, this.senha);

        if (loginValido) {
            console.log('Login realizado com sucesso');
            this.router.navigate(['/site']);
        } else {
            console.log('E-mail ou senha incorretos');
        }
    }
}
