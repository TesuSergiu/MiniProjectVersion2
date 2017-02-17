"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var product_list_component_1 = require('./product/product-list.component');
var star_rating_component_1 = require('./shared/star-rating.component');
var header_component_1 = require('./shared/header.component');
var homepage_component_1 = require('./shared/homepage.component');
var footer_component_1 = require('./shared/footer.component');
var contact_component_1 = require('./shared/contact.component');
var product_details_component_1 = require('./product/product-details.component');
var demo_data_service_1 = require('./shared/demo-data.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot([
                    { path: 'home', component: product_list_component_1.ProductListComponent },
                    { path: 'contact', component: contact_component_1.ContactComponent },
                    { path: 'product/:id', component: product_details_component_1.ProductDetailsComponent },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: '**', redirectTo: 'home', pathMatch: 'full' }
                ])
            ],
            declarations: [app_component_1.AppComponent, product_list_component_1.ProductListComponent, star_rating_component_1.StarRatingComponent, header_component_1.HeaderComponent, footer_component_1.FooterComponent, contact_component_1.ContactComponent, product_details_component_1.ProductDetailsComponent, homepage_component_1.HomepageComponent],
            providers: [demo_data_service_1.DemoDataService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map