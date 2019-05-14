import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DivArticleComponent } from './div-article/div-article.component';
import { PanierComponent } from './panier/panier.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { PageProduitComponent } from './page-produit/page-produit.component';
import { HttpClientModule } from '@angular/common/http';
import { PanierProduitComponent } from './panier-produit/panier-produit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErreurRechercheComponent } from './erreur-recherche/erreur-recherche.component';

const appRoutes: Routes = [
  { path: 'panier', component: PanierComponent },
  { path: 'produits/:id', component: PageProduitComponent },
  {
    path: '',
    component: HomeComponent
  },
  { path: '**', component: ErrorComponent },
  { path: 'PageNonTrouvee', component: ErrorComponent }

];


@NgModule({
  declarations: [
    AppComponent,
    DivArticleComponent,
    PanierComponent,
    ErrorComponent,
    HomeComponent,
    PageProduitComponent,
    PanierProduitComponent,
    ErreurRechercheComponent,
  ],
  entryComponents: [DivArticleComponent, PanierProduitComponent, ErreurRechercheComponent], 
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    //permet de charger à l'avance les components quand l'utilisateur est dans l'accueil
    RouterModule.forRoot(appRoutes,
      { preloadingStrategy: PreloadAllModules })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
