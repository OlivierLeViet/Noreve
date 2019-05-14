import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from "../home/home.service";
import { Router } from "@angular/router";
import $ from 'jquery';

@Component({
  selector: 'app-page-produit',
  templateUrl: './page-produit.component.html',
  styleUrls: ['./page-produit.component.css']
})
export class PageProduitComponent implements OnInit {
  
  //attribues

  id: number;
  price: string;
  title: string ;
  description: string;
  imagePath : string;
  finitionExt : string[];

  //méthodes

  addToCard() {
    this.HomeService.pushIdInCard(+this.id);

    //modifier le nombre sur le panier directement
    let quantity : number = this.HomeService.idCard.length -1;
    let quantityString = quantity.toString();
    $("#cardQuantity").html(quantityString).fadeIn();
    $("#div-notif").html("");
    setTimeout(function () { $("#div-notif2").html("✔ ajouté au panier").fadeIn(); }, 100);
    setTimeout(function () { $("#div-notif2").fadeOut(); }, 1300);
    
  }

  goToCard(){
    this.router.navigate(['panier']);
  }
  //constructeur

  constructor(private HomeService: HomeService, private route: ActivatedRoute, private router: Router) { }

  //lors de l'initialisation du component (différent du constructeur voir la doc)

  ngOnInit() {

    let articleHomeService = "this.HomeService.articles.";
    this.id = this.route.snapshot.params['id'];

    let object = this.HomeService.getObjectById(this.id); // recupération de la catégorie de l'article dans le tableau en fonction de l'id en paramètre dans l'URL

    if (typeof object == 'undefined') {
      this.router.navigate(['PageNonTrouvee']);
    }
   
    let position = this.HomeService.getPositionArticle(this.id); // recupération de la position de l'article dans sa catégorie dans le tableau en fonction de l'id

    articleHomeService = articleHomeService + object + "[" + position +"]"; // assemblage du chemin de l'article

    // recupération des attribus
    this.title = eval(articleHomeService).title;
    this.description = eval(articleHomeService).description;
    this.imagePath = eval(articleHomeService).imagePath;
    this.price = eval(articleHomeService).price;
    this.finitionExt = eval(articleHomeService).finitionExt;

    let quantity : number = this.HomeService.idCard.length -1;
    let quantityString = quantity.toString();
    $("#cardQuantity").fadeOut()
    $("#cardQuantity").html(quantityString).fadeIn();

    
  }

}
