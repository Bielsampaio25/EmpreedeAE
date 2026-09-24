import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Sidebar } from '../../componentes/sidebar/sidebar';

interface Mensagem {
    nome: string;
    texto: string;
    lado: 'esquerda' | 'direita';
    status: string;
}

@Component({
    selector: 'app-comunidade',
    imports: [CommonModule, FormsModule, Sidebar],
    templateUrl: './comunidade.html',
    styleUrl: './comunidade.css'
})
export class Comunidade {

    novaMensagem = '';

    mensagens: Mensagem[] = [
        {
            nome: 'Paulo',
            texto: 'Galera, bom dia! Descobri um livro ótimo sobre empreendedorismo.',
            lado: 'esquerda',
            status: '✓✓'
        },
        {
            nome: 'Maria',
            texto: 'Depois manda aqui para darmos uma olhada.',
            lado: 'esquerda',
            status: '✓✓'
        },
        {
            nome: 'Você',
            texto: 'Tenho um super interessante também, depois mandarei aqui na comunidade.',
            lado: 'direita',
            status: '✓✓'
        }
    ];

    ngOnInit() {
        const mensagensSalvas = localStorage.getItem('mensagens-comunidade');

        if (mensagensSalvas) {
            this.mensagens = JSON.parse(mensagensSalvas);
        }
    }

    enviarMensagem() {
        const texto = this.novaMensagem.trim();

        if (!texto) {
            return;
        }

        const mensagem: Mensagem = {
            nome: 'Você',
            texto: texto,
            lado: 'direita',
            status: '✓'
        };

        this.mensagens.push(mensagem);

        localStorage.setItem(
            'mensagens-comunidade',
            JSON.stringify(this.mensagens)
        );

        this.novaMensagem = '';
    }
}