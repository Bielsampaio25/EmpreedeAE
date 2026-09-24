import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Sidebar } from '../../componentes/sidebar/sidebar';


@Component({
    selector: 'app-editar-site',
    imports: [CommonModule, FormsModule, Sidebar],
    templateUrl: './editar-site.html',
    styleUrl: './editar-site.css'
})
export class EditarSite {

    anoAtual = new Date().getFullYear();

    linksNavegacao = [
        { nome: '', endereco: '' },
        { nome: '', endereco: '' }
    ];

    produtos = [
        {
            titulo: '',
            descricao: '',
            preco: '',
            imagem: ''
        }
    ];

    cardsCarrossel = [
        {
            subtitulo: '',
            titulo: '',
            descricao: '',
            imagem: '',
            textoBotao: '',
            linkBotao: '',
            corBotao: '#FF6B00'
        }
    ];

    linksRodape = [
        { nome: '', informacao: '' },
        { nome: '', informacao: '' }
    ];

    adicionarLinkNavegacao() {
        this.linksNavegacao.push({
            nome: '',
            endereco: ''
        });
    }

    removerLinkNavegacao(index: number) {
        this.linksNavegacao.splice(index, 1);
    }

    adicionarProduto() {
        this.produtos.push({
            titulo: '',
            descricao: '',
            preco: '',
            imagem: ''
        });
    }

    removerProduto(index: number) {
        this.produtos.splice(index, 1);
    }

    adicionarCardCarrossel() {
        this.cardsCarrossel.push({
            subtitulo: '',
            titulo: '',
            descricao: '',
            imagem: '',
            textoBotao: '',
            linkBotao: '',
            corBotao: '#FF6B00'
        });
    }

    removerCardCarrossel(index: number) {
        this.cardsCarrossel.splice(index, 1);
    }

    adicionarLinkRodape() {
        this.linksRodape.push({
            nome: '',
            informacao: ''
        });
    }

    removerLinkRodape(index: number) {
        this.linksRodape.splice(index, 1);
    }
}