export interface SiteModel {
    nomeNegocio: string;
    corNome: string;
    logo: string;

    linksNavegacao: {
        nome: string;
        endereco: string;
    }[];

    botaoCabecalho: {
        texto: string;
        cor: string;
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
        links: {
            nome: string;
            informacao: string;
        }[];
    };
}