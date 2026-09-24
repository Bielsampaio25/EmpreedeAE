import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Sidebar } from '../../componentes/sidebar/sidebar';
import { SiteModel } from '../../models/siteModel';
import { SiteService } from '../../services/site-service';

@Component({
    selector: 'app-editar-site',
    imports: [CommonModule, FormsModule, RouterLink, Sidebar],
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

        apresentacao: {
            subtitulo: 'FEITO PARA A SUA MARCA',
            titulo: 'Gabriel Camisetas',
            imagem: ''
        },

        linksNavegacao: [
            {
                nome: 'Sobre',
                endereco: '#sobre'
            },
            {
                nome: 'Produtos',
                endereco: '#produtos'
            },
            {
                nome: 'Contato',
                endereco: '#contato'
            }
        ],

        botaoCabecalho: {
            texto: 'Falar com a marca',
            cor: '#2563EB',
            link: 'https://instagram.com'
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
                linkBotao: 'https://instagram.com',
                corBotao: '#FF6B00'
            }
        ],

        rodape: {
            subtitulo: 'VAMOS CONVERSAR?',
            titulo: 'Seu próximo projeto começa aqui.',
            corFundo: '#141d30',
            corTexto: '#ffffff',
            links: [
                {
                    nome: 'E-mail',
                    informacao: 'oi@gabrielcamisetas.com'
                },
                {
                    nome: 'Telefone',
                    informacao: '(11) 99876-2210'
                },
                {
                    nome: 'Localização',
                    informacao: 'São Paulo, SP'
                }
            ]
        }
    };

    constructor(private siteService: SiteService) { }

    ngOnInit() {

        const siteSalvo = this.siteService.buscarSite();

        if (siteSalvo) {

            this.site = siteSalvo;

            if (!this.site.apresentacao) {

                this.site.apresentacao = {
                    subtitulo: 'FEITO PARA A SUA MARCA',
                    titulo: this.site.nomeNegocio,
                    imagem: ''
                };

            }

            if (!this.site.botaoCabecalho.link) {
                this.site.botaoCabecalho.link = 'https://instagram.com';
            }

            if (!this.site.rodape.corFundo) {
                this.site.rodape.corFundo = '#141d30';
            }

            if (!this.site.rodape.corTexto) {
                this.site.rodape.corTexto = '#ffffff';
            }

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

    validarLink(link: string): boolean {

        if (!link || !link.trim()) {
            return false;
        }

        try {

            const url = new URL(link.trim());

            return (
                url.protocol === 'http:' ||
                url.protocol === 'https:'
            );

        } catch {

            return false;

        }

    }

    selecionarLogo(event: Event) {

        const input = event.target as HTMLInputElement;

        if (!input.files || input.files.length === 0) {
            return;
        }

        const arquivo = input.files[0];

        const leitor = new FileReader();

        leitor.onload = () => {
            this.site.logo = leitor.result as string;
        };

        leitor.readAsDataURL(arquivo);

    }

    selecionarImagemApresentacao(event: Event) {

        const input = event.target as HTMLInputElement;

        if (!input.files || input.files.length === 0) {
            return;
        }

        const arquivo = input.files[0];

        const leitor = new FileReader();

        leitor.onload = () => {
            this.site.apresentacao.imagem = leitor.result as string;
        };

        leitor.readAsDataURL(arquivo);

    }

    selecionarImagemProduto(event: Event, index: number) {

        const input = event.target as HTMLInputElement;

        if (!input.files || input.files.length === 0) {
            return;
        }

        const arquivo = input.files[0];

        const leitor = new FileReader();

        leitor.onload = () => {
            this.site.produtos[index].imagem = leitor.result as string;
        };

        leitor.readAsDataURL(arquivo);

    }

    selecionarImagemCarrossel(event: Event, index: number) {

        const input = event.target as HTMLInputElement;

        if (!input.files || input.files.length === 0) {
            return;
        }

        const arquivo = input.files[0];

        const leitor = new FileReader();

        leitor.onload = () => {
            this.site.cardsCarrossel[index].imagem = leitor.result as string;
        };

        leitor.readAsDataURL(arquivo);

    }

    salvarAlteracoes() {

        this.gerarUrl();

        const linkCabecalho = this.site.botaoCabecalho.link.trim();

        if (!this.validarLink(linkCabecalho)) {

            alert(
                'Informe um link válido para o botão do cabeçalho.\n\nExemplo: https://instagram.com/suaempresa'
            );

            return;

        }

        for (const card of this.site.cardsCarrossel) {

            const link = card.linkBotao.trim();

            if (!this.validarLink(link)) {

                alert(
                    `O link do card "${card.titulo || 'sem título'}" é inválido.\n\nExemplo: https://instagram.com/suaempresa`
                );

                return;

            }

        }

        this.siteService.salvarSite(this.site);

        console.log('Site salvo:', this.site);

        alert('Alterações salvas com sucesso!');

    }

    copiarUrl() {

        const url = this.enderecoBase + '/site/' + this.site.url;

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