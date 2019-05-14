import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';
import { HomeService } from "../home/home.service";
import $ from 'jquery';

@Component({
  selector: 'app-div-article',
  templateUrl: './div-article.component.html',
  styleUrls: ['./div-article.component.css'],
})
export class DivArticleComponent implements OnInit {

  // attribues

  @Input() title : string ;
  @Input() id: number;
  @Input() description : string ;
  @Input() imagePath: string;
  @Input() price: number;
  idDivNotif: string;

  // méthodes

  addToCard(){


    this.HomeService.pushIdInCard(this.id);

    //modifier le nombre sur le panier dirrectement
    let quantity : number = this.HomeService.idCard.length -1;
    let quantityString = quantity.toString();
    $("#cardQuantity").html(quantityString).fadeIn();
    

    //afficher dynamiquement une notification quand l'élément est ajouté au panier
    let command = '"#'+ this.idDivNotif+'"';

    $(eval(command)).html("");
    setTimeout(function(){ $(eval(command)).html("✔ ajouté au panier").fadeIn(); }, 100);
    setTimeout(function(){ $(eval(command)).fadeOut(); }, 1000);
    }


  // constructeur
  
  constructor(private HomeService: HomeService) { }

  // lors de l'initialisation du component (différent du constructeur voir la doc)

  ngOnInit() {
    this.idDivNotif = "divArticle"+ this.id.toString();
  }

}
