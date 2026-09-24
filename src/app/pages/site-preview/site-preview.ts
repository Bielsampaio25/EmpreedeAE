import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SiteModel } from '../../models/siteModel';
import { SiteService } from '../../services/site-service';

@Component({
    selector: 'app-site-preview',
    imports: [CommonModule],
    templateUrl: './site-preview.html',
    styleUrl: './site-preview.css'
})
export class SitePreview {
    anoAtual = new Date().getFullYear();
    site: SiteModel | null = null;

    constructor(
        private siteService: SiteService,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.site = this.siteService.buscarSite();

        const url = this.route.snapshot.paramMap.get('url');

        console.log('URL acessada:', url);
        console.log('Site carregado:', this.site);
    }
}