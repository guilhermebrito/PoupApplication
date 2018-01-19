import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { PoupApplicationSharedModule, UserRouteAccessService } from './shared';
import { PoupApplicationAppRoutingModule} from './app-routing.module';
import { PoupApplicationHomeModule } from './home/home.module';
import { PoupApplicationAdminModule } from './admin/admin.module';
import { PoupApplicationAccountModule } from './account/account.module';
import { PoupApplicationEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        PoupApplicationAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        PoupApplicationSharedModule,
        PoupApplicationHomeModule,
        PoupApplicationAdminModule,
        PoupApplicationAccountModule,
        PoupApplicationEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class PoupApplicationAppModule {}
