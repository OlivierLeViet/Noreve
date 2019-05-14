import {
  Component, OnInit, ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  ComponentFactory
} from '@angular/core';
import { PanierProduitComponent } from '../panier-produit/panier-produit.component';
import { HomeService } from "../home/home.service";

@Component({
  selector: 'panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

    //attribues
    @ViewChild('DivArticleContainer', { read: ViewContainerRef }) entry: ViewContainerRef;
    priceWithoutTVA : number;
    TVAPrice : number;
    priceCard : number;
    //méthodes

    //methode locale pour récupérer le prix total du panier
  retrievePriceCard(){
    this.priceCard = this.HomeService.retrievePriceCard();
    this.priceWithoutTVA = this.priceCard / 1.25;
    this.TVAPrice = this.priceWithoutTVA * 0.25;
  }

  // vider le panier
  clear()
  {
    this.entry.clear();
    this.HomeService.idCard = [0];
    this.priceWithoutTVA = 0;
    this.TVAPrice = 0;
    this.priceCard = 0;
    this.HomeService.reinitialiserPrix();
  }
    //constructeur

  constructor(private resolver: ComponentFactoryResolver, private HomeService: HomeService) { }


   //lors de l'initialisation du component (différent du constructeur voir la doc)

  ngOnInit() {
    let object: string;
    let idCardLenght: number;
    let i = 1;
    idCardLenght = this.HomeService.idCard.length;
    let articleHomeService = "";
    this.entry.clear();
    

    do {

      object = this.HomeService.getObjectById(this.HomeService.idCard[i]);

      if (typeof object !== 'undefined') { // si il y a un article dans le panier
          
        articleHomeService = "this.HomeService.articles." + object;
        articleHomeService = articleHomeService + "[" + this.HomeService.getPositionArticle(this.HomeService.idCard[i]) + "]";

        if (this.HomeService.isIdInCard(eval(articleHomeService).id, i) == false){  //si l'article n'existe pas déjà on le crée visuellement
            
         //si l'article n'existe pas déjà on le crée visuellement
          const factory = this.resolver.resolveComponentFactory(PanierProduitComponent);
          const componentRef = this.entry.createComponent(factory);
          componentRef.instance.title = eval(articleHomeService).title; // placement de l'attribut de l'objet dynamiquement
          componentRef.instance.description = eval(articleHomeService).description;
          componentRef.instance.id = eval(articleHomeService).id;
          componentRef.instance.imagePath = eval(articleHomeService).imagePath;
          componentRef.instance.price = eval(articleHomeService).price;
            }
      }
      else{ // si il n'y a pas d'article dans le panier
         this.HomeService.reinitialiserPrix();
      }
      i++;
    }
    while (i < idCardLenght);


    this.retrievePriceCard();

  }

}
