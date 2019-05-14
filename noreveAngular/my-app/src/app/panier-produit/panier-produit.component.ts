import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import {ElementRef} from '@angular/core';
import { HomeService } from "../home/home.service";

@Component({
  selector: 'app-panier-produit',
  templateUrl: './panier-produit.component.html',
  styleUrls: ['./panier-produit.component.css'],
})
export class PanierProduitComponent implements OnInit {

  //attribues 

  @Input() title: string;
  @Input() id: number;
  @Input() description: string;
  @Input() imagePath: string;
  @Input() price: number;
  @Input() quantity: number;
  priceWithQuantity : number;
  idDivGlobale: string;
  idDivBouttonQuantite: string;
  idDivBouttonInputSpinner : string;

  //méthodes

  destroy(){
    let indexElementToDestroy : number;
    let newTotalPrice : number;
    let TVAPrice : number;
    let priceWithoutTVA : number;


    indexElementToDestroy = this.HomeService.idCard.indexOf(this.id);

    let  tableauElementASuprimmer: number[] = [0];

    if (this.HomeService.idCard.length != 2){

      // creation d'un tableau contenant les éléments à supprimer dans idCard
      for(var i =1; i <= this.HomeService.idCard.length; i++){
            if (this.HomeService.idCard[i] == this.id)
            {
              tableauElementASuprimmer.push(i);
            }
          }

      tableauElementASuprimmer = tableauElementASuprimmer.reverse();
      tableauElementASuprimmer.pop();

      // suppression des elements dans le tableau idCard
      for(var i =0 ; i < tableauElementASuprimmer.length ; i++){

              this.HomeService.idCard.splice(tableauElementASuprimmer[i], 1);
      }
      

      newTotalPrice = this.HomeService.retrievePriceCard();
      priceWithoutTVA = newTotalPrice / 1.25;
      TVAPrice = 0.25 * priceWithoutTVA;
    }

    else{
      newTotalPrice = this.HomeService.retrievePriceCard();
      priceWithoutTVA = newTotalPrice / 1.25;
      TVAPrice = 0.25 * priceWithoutTVA;
      this.HomeService.idCard.splice(indexElementToDestroy, indexElementToDestroy);
    }

    this.elementRef.nativeElement.remove();

  
    document.getElementById("totalPriceDiv").innerHTML = newTotalPrice + " €";
    document.getElementById("TVADiv").innerHTML = TVAPrice + " €";
    document.getElementById("priceDiv").innerHTML = priceWithoutTVA + " €";

    if ( this.HomeService.idCard.length == 1){
      this.HomeService.reinitialiserPrix();
    }

  }

// incrementation/ decrementation quantité objet
  counter(flag) {

    let newTotalPrice: number;
    let TVAPrice: number;
    let priceWithoutTVA: number;
    let count = this.quantity;
   
        // si on appuie sur plus
        if (flag === 'increment') {  
          count++;
          this.HomeService.idCard.push(this.id);    
        }
        // si on appuie sur moins
        if (flag === 'decrement') {

          if (this.quantity > 1) {
            count--;
            let index = this.HomeService.idCard.indexOf(this.id);
            this.HomeService.idCard.splice(index, index);
          }
          else {
            return;
          }
        }

        // recalcul des prix
        this.quantity = count;
        this.priceWithQuantity = this.quantity * this.price;
        newTotalPrice = this.HomeService.retrievePriceCard();
        priceWithoutTVA = newTotalPrice / 1.25;
        TVAPrice = 0.25 * priceWithoutTVA;
        document.getElementById("totalPriceDiv").innerHTML = newTotalPrice + " €";
        document.getElementById("TVADiv").innerHTML = TVAPrice + " €";
        document.getElementById("priceDiv").innerHTML = priceWithoutTVA + " €";

        // placement de la nouvelle quantité dans le input spinner 
        (<HTMLInputElement>document.getElementById(this.idDivBouttonInputSpinner)).value = count.toString();
    
  }

  //constructeur

  constructor(private elementRef: ElementRef, private HomeService: HomeService) { }




  //lors de l'initialisation du component (différent du constructeur voir la doc)

  ngOnInit() {

    this.quantity = this.HomeService.countInCard(this.id);
    this.priceWithQuantity = this.price * this.quantity;
    this.idDivGlobale = "divArticle"+ this.id.toString();
    this.idDivBouttonQuantite = "DivBouttonQuantite"+ this.id.toString();
    this.idDivBouttonInputSpinner = "idDivBouttonInputSpinner" + this.id.toString();

    let command = '"#'+ this.idDivBouttonQuantite+'"';

    
    
  }

}
