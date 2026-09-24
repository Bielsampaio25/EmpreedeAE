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
import { authGuard } from './guards/auth-guard-guard';
import { Termos } from './pages/termos/termos';
import { Politica } from './pages/politica/politica';

export const routes: Routes = [
    {path:"", redirectTo:"home", pathMatch:"full"},
    {path:"home", component:Home},
    {path:"login", component:Login},
    {path:"cadastro", component:Cadastro},
    {path:"site", component:Site,  canActivate: [authGuard]},
    {path:"site/:url", component:SitePreview},
    {path:"editarSite", component:EditarSite, canActivate: [authGuard]},
    {path:"comunidade", component:Comunidade, canActivate: [authGuard]},
    {path:"perfil", component:Perfil, canActivate: [authGuard]},
    {path:"planos", component:Planos, canActivate: [authGuard]},
    {path:"pagamento", component:Pagamento, canActivate: [authGuard]},
    {path:"pagamentoConfirmado", component:PagamentoConfirmado, canActivate: [authGuard]},
    {path:"termos", component:Termos},
    {path:"politica", component:Politica}
];
