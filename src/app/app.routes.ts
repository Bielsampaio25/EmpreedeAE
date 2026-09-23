import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Cadastro } from './pages/cadastro/cadastro';
import { Site } from './pages/site/site';
import { SitePreview } from './pages/site-preview/site-preview';
import { EditarSite } from './pages/editar-site/editar-site';
import { Comunidade } from './pages/comunidade/comunidade';
import { Perfil } from './pages/perfil/perfil';
import { Planos } from './pages/planos/planos';
import { Pagamento } from './pages/pagamento/pagamento';
import { PagamentoConfirmado } from './pages/pagamento-confirmado/pagamento-confirmado';
export const routes: Routes = [
    {path:"", redirectTo:"home", pathMatch:"full"},
    {path:"home", component:Home},
    {path:"login", component:Login},
    {path:"cadastro", component:Cadastro},
    {path:"site", component:Site},
    {path:"sitePreview", component:SitePreview},
    {path:"editarSite", component:EditarSite},
    {path:"comunidade", component:Comunidade},
    {path:"perfil", component:Perfil},
    {path:"planos", component:Planos},
    {path:"pagamento", component:Pagamento},
    {path:"pagamentoConfirmado", component:PagamentoConfirmado}
];
