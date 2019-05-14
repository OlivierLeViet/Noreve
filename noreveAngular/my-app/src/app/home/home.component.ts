import {
  Component, OnInit, ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  ComponentFactory} from '@angular/core';
import { DivArticleComponent } from '../div-article/div-article.component';
import { ErreurRechercheComponent } from '../erreur-recherche/erreur-recherche.component';
import { HomeService } from "./home.service";
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {

  //attribues

  @ViewChild('DivArticleContainer', { read: ViewContainerRef }) entry: ViewContainerRef;
  baseUrl = 'noreve.com/product/image/form/{idImage}';
  articles: any;


  //méthodes

  //rechercher un élement dans les articles
  rechercher(){
    let i = 1;
    let articleHomeService = "";
    let elementARechercher = (<HTMLInputElement>document.getElementById("searchInput")).value;
    let reponse = this.HomeService.rechercher(elementARechercher);
    this.entry.clear();

    if (reponse.length <= 1){
      const factory = this.resolver.resolveComponentFactory(ErreurRechercheComponent);
      const componentRef = this.entry.createComponent(factory);
    }
    else{
      do {
        const factory = this.resolver.resolveComponentFactory(DivArticleComponent);
        const componentRef = this.entry.createComponent(factory);

        articleHomeService = "this.HomeService.articles." + this.HomeService.getObjectById(reponse[i]) + "[" + this.HomeService.getPositionArticle(reponse[i])+"]";

        componentRef.instance.title = eval(articleHomeService).title; // placement de l'attribut de l'objet dynamiquement
        componentRef.instance.description = eval(articleHomeService).description;
        componentRef.instance.id = eval(articleHomeService).id;
        componentRef.instance.imagePath = eval(articleHomeService).imagePath;
        componentRef.instance.price = eval(articleHomeService).price;
        i++;
      }
      while (i < reponse.length);
    }
  }

  //rechercher une catégorie d'articles
  rechercherCategorie() {
    let i = 1;
    let articleHomeService = "";
    let elementARechercher = (<HTMLInputElement>document.getElementById("recherche")).value;
    let reponse = this.HomeService.rechercherCategorie(elementARechercher);
    this.entry.clear();

    if ( typeof reponse == "undefined") {
      const factory = this.resolver.resolveComponentFactory(ErreurRechercheComponent);
      const componentRef = this.entry.createComponent(factory);
    }
    else {
      this.createComponent(reponse);
    }
  }

 
  //méthode pour créer dynamiquement une div article
  createComponent(object : string) 
  {

    let arrayLenght : number;
    let i = 0;
    arrayLenght = this.HomeService.getArrayLenght(object);
    let articleHomeService = "";
    this.entry.clear();
    
    
      do{
        const factory = this.resolver.resolveComponentFactory(DivArticleComponent);
        const componentRef = this.entry.createComponent(factory);
        articleHomeService = "this.HomeService.articles." + object;
        articleHomeService = articleHomeService+"["+ i +"]";
        componentRef.instance.title = eval(articleHomeService).title; // placement de l'attribut de l'objet dynamiquement
        componentRef.instance.description = eval(articleHomeService).description;
        componentRef.instance.id = eval(articleHomeService).id; 
        componentRef.instance.imagePath = eval(articleHomeService).imagePath; 
        componentRef.instance.price = eval(articleHomeService).price; 
        i++;
      }
      while (i < arrayLenght);



  }

  getPositionArticle(l_id: number){
      console.log(this.HomeService.getPositionArticle(l_id));
    }

  //constructeur

  constructor(private resolver: ComponentFactoryResolver, private HomeService: HomeService, private router: Router) { 

  }

 
  //lors de l'initialisation du component (différent du constructeur voir la doc)
  
  ngOnInit() {


    //scroll en haut quand on arrive
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    }

    //scroll en haut de la page quand on navigue
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });


    this.articles = this.HomeService.articles;

    let quantity : number = this.HomeService.idCard.length -1;
    let quantityString = quantity.toString();
    $("#cardQuantity").fadeOut()
    $("#cardQuantity").html(quantityString).fadeIn();

    let tableauCategories = [""];

    for (let obj in this.articles) {
      tableauCategories.push(obj);
    }
  
    //barre de recherche
    (<any>$('#recherche')).autocomplete({
      source: tableauCategories,
      minLength: 1,
    }).data("ui-autocomplete")._renderItem = function (ul, item) {

      ul.addClass('suggestions'); //Ul custom class here

      return $("<li></li>")
        .addClass(item.suggestions) //item based custom class to li here
        .append("<div href='#'>" + item.label + "</div>")
        .data("ui-autocomplete-item", item)
        .appendTo(ul);
    };


    $(document).ready(function () {
      var touch = $('#resp-menu');
      var menu = $('.menu');

      $(touch).on('click', function (e) {
        e.preventDefault();
        menu.slideToggle();
      });

      $(window).resize(function () {
        var w = $(window).width();
        if (w > 767 && menu.is(':hidden')) {
          menu.removeAttr('style');
        }
      });

    });
  

  }
  


   
}
