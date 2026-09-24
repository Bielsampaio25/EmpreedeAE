import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Sidebar } from '../../componentes/sidebar/sidebar';
import { SiteModel } from '../../models/siteModel';
import { SiteService } from '../../services/site-service';

@Component({
    selector: 'app-editar-site',
    imports: [CommonModule, FormsModule, Sidebar],
    templateUrl: './editar-site.html',
    styleUrl: './editar-site.css'
})
export class EditarSite {

    anoAtual = new Date().getFullYear();
    enderecoBase = window.location.origin;

    site: SiteModel = {
        nomeNegocio: 'Gabriel Camisetas',
        corNome: '#17213D',
        logo: '',
        url: '',

        linksNavegacao: [
            { nome: 'Sobre', endereco: '#sobre' },
            { nome: 'Produtos', endereco: '#produtos' },
            { nome: 'Contato', endereco: '#contato' }
        ],

        botaoCabecalho: {
            texto: 'Falar com a marca',
            cor: '#2563EB'
        },

        historia: {
            subtitulo: 'NOSSA HISTÓRIA',
            titulo: 'Feito para vestir o que importa',
            descricao: 'A Gabriel Camisetas nasceu para dar forma às ideias de quem cria, empreende e faz acontecer. Cada peça é pensada com cuidado, da arte ao acabamento.'
        },

        produtos: [
            {
                titulo: 'Camiseta Manifesto',
                descricao: 'Coleção autoral',
                preco: 'R$ 89,90',
                imagem: ''
            },
            {
                titulo: 'Kit Marca em Movimento',
                descricao: 'Kits',
                preco: 'R$ 149,90',
                imagem: ''
            },
            {
                titulo: 'Personalizada para você',
                descricao: 'Personalização',
                preco: 'A partir de R$ 119,90',
                imagem: ''
            }
        ],

        cardsCarrossel: [
            {
                subtitulo: 'PERSONALIZANDO IDEIAS, CRIANDO IDENTIDADE.',
                titulo: 'Vista a sua ideia.',
                descricao: 'Camisetas autorais e personalizadas para transformar histórias em identidade.',
                imagem: '',
                textoBotao: 'Conheça nossos produtos',
                linkBotao: '#produtos',
                corBotao: '#FF6B00'
            }
        ],

        rodape: {
            subtitulo: 'VAMOS CONVERSAR?',
            links: [
                { nome: 'E-mail', informacao: 'oi@gabrielcamisetas.com' },
                { nome: 'Telefone', informacao: '(11) 99876-2210' },
                { nome: 'Localização', informacao: 'São Paulo, SP' }
            ]
        }
    };

    constructor(private siteService: SiteService) { }

    ngOnInit() {
        const siteSalvo = this.siteService.buscarSite();

        if (siteSalvo) {
            this.site = siteSalvo;
        }

        this.gerarUrl();
    }

    gerarUrl() {
        const nome = this.site.nomeNegocio
            .trim()
            .replace(/[^a-zA-ZÀ-ÿ0-9 ]/g, '')
            .split(' ')
            .filter(palavra => palavra.length > 0);

        if (nome.length === 0) {
            this.site.url = '';
            return;
        }

        const primeiraPalavra = nome[0].toLowerCase();

        const outrasPalavras = nome
            .slice(1)
            .map(palavra =>
                palavra.charAt(0).toUpperCase() +
                palavra.slice(1).toLowerCase()
            )
            .join('');

        this.site.url = primeiraPalavra + outrasPalavras;
    }

    salvarAlteracoes() {
        this.gerarUrl();
        this.siteService.salvarSite(this.site);

        console.log('Site salvo:', this.site);
    }

    copiarUrl() {
        const url = window.location.origin + '/site/' + this.site.url;
        navigator.clipboard.writeText(url);
        console.log('URL copiada:', url);
    }

    adicionarLinkNavegacao() {
        this.site.linksNavegacao.push({
            nome: '',
            endereco: ''
        });
    }

    removerLinkNavegacao(index: number) {
        this.site.linksNavegacao.splice(index, 1);
    }

    adicionarProduto() {
        this.site.produtos.push({
            titulo: '',
            descricao: '',
            preco: '',
            imagem: ''
        });
    }

    removerProduto(index: number) {
        this.site.produtos.splice(index, 1);
    }

    adicionarCardCarrossel() {
        this.site.cardsCarrossel.push({
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
        this.site.cardsCarrossel.splice(index, 1);
    }

    adicionarLinkRodape() {
        this.site.rodape.links.push({
            nome: '',
            informacao: ''
        });
    }

    removerLinkRodape(index: number) {
        this.site.rodape.links.splice(index, 1);
    }
}