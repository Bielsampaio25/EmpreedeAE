import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Cadastro } from './pages/cadastro/cadastro';
import { Site } from './pages/site/site';
import { SitePreview } from './pages/site-preview/site-preview';
import { EditarSite } from './pages/editar-site/editar-site';
import { Comunidade } from './pages/comunidade/comunidade';
export const routes: Routes = [
    {path:"", redirectTo:"home", pathMatch:"full"},
    {path:"home", component:Home},
    {path:"login", component:Login},
    {path:"cadastro", component:Cadastro},
    {path:"site", component:Site},
    {path:"sitePreview", component:SitePreview},
    {path:"editarSite", component:EditarSite},
    {path:"comunidade", component:Comunidade}
];
