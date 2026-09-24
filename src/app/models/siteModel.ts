export interface SiteModel {
    nomeNegocio: string;
    corNome: string;
    logo: string;
    url: string;

    apresentacao: {
        subtitulo: string;
        titulo: string;
        imagem: string;
    };

    linksNavegacao: {
        nome: string;
        endereco: string;
    }[];

    botaoCabecalho: {
        texto: string;
        cor: string;
        link: string;
    };

    historia: {
        subtitulo: string;
        titulo: string;
        descricao: string;
    };

    produtos: {
        titulo: string;
        descricao: string;
        preco: string;
        imagem: string;
    }[];

    cardsCarrossel: {
        subtitulo: string;
        titulo: string;
        descricao: string;
        imagem: string;
        textoBotao: string;
        linkBotao: string;
        corBotao: string;
    }[];

    rodape: {
        subtitulo: string;
        titulo: string;
        corFundo: string;
        corTexto: string;
        links: {
            nome: string;
            informacao: string;
        }[];
    };
}