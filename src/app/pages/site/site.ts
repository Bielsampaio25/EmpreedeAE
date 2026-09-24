import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { SiteModel } from '../../models/siteModel';
import { SiteService } from '../../services/site-service';
import { Sidebar } from '../../componentes/sidebar/sidebar';

@Component({
    selector: 'app-site',
    imports: [Sidebar, CommonModule],
    templateUrl: './site.html',
    styleUrl: './site.css'
})
export class Site {

    site: SiteModel | null = null;
    urlPreview: SafeResourceUrl | null = null;

    constructor(
        private siteService: SiteService,
        private sanitizer: DomSanitizer
    ) {}

    ngOnInit() {
        this.site = this.siteService.buscarSite();

        if (this.site?.url) {
            this.urlPreview = this.sanitizer.bypassSecurityTrustResourceUrl(
                '/site/' + this.site.url
            );
        }

        console.log('Site:', this.site);
        console.log('URL:', this.site?.url);
    }
}
