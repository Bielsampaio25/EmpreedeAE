import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuarioModel } from '../../models/usuario-model';
import { CadastroService } from '../../services/cadastro-service';
import { Sidebar } from '../../componentes/sidebar/sidebar';

@Component({
    selector: 'app-perfil',
    imports: [CommonModule, FormsModule, Sidebar],
    templateUrl: './perfil.html',
    styleUrl: './perfil.css'
})
export class Perfil {

    usuario: UsuarioModel = {
        nome: '',
        email: '',
        senha: ''
    };

    telefone = '';
    negocio = '';
    categoria = '';
    cidade = '';
    descricao = '';

    mensagem = '';

    constructor(private cadastroService: CadastroService) { }

    ngOnInit() {
        const usuarioSalvo = this.cadastroService.buscarUsuario();

        if (usuarioSalvo) {
            this.usuario = usuarioSalvo;
        }

        const perfilSalvo = localStorage.getItem('perfil');

        if (perfilSalvo) {
            const perfil = JSON.parse(perfilSalvo);

            this.telefone = perfil.telefone || '';
            this.negocio = perfil.negocio || '';
            this.categoria = perfil.categoria || '';
            this.cidade = perfil.cidade || '';
            this.descricao = perfil.descricao || '';
        }
    }

    salvarPerfil() {
        this.cadastroService.cadastrar(this.usuario);

        const perfil = {
            telefone: this.telefone,
            negocio: this.negocio,
            categoria: this.categoria,
            cidade: this.cidade,
            descricao: this.descricao
        };

        localStorage.setItem('perfil', JSON.stringify(perfil));

        this.mensagem = 'Alterações salvas com sucesso!';

        setTimeout(() => {
            window.location.reload();
        }, 500);
    }
}