import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
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

    constructor(private cadastroService: CadastroService) {}

    cadastrar() {
        this.cadastroService.cadastrar(this.usuario);
    }
}
