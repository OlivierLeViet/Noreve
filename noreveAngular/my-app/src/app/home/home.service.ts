import { Injectable, OnInit } from "@angular/core";
import { Observable, throwError, from } from "rxjs";
import { map, catchError } from "rxjs/operators";
import { HomeComponent } from "./home.component";
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
  HttpHeaders
} from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HomeService {
  // attribues

  tableau_fetching: any[];
  idCard: number[] = [0];

  //tableau d'articles
  articles = {
    Iphonesx: [
      {
        id: 1,
        title: "Iphone X",
        description:
          "L iPhone 7 et l iPhone 7 Plus sont les deux modèles de la 10e génération du smartphone de la société Apple",
        imagePath:
          "./assets/img/images_coques_iphones/iphonesX/coque-cuir-apple-iphone-x.jpg",
        price: "130"
      },
      {
        id: 2,
        title: "Iphone X",
        description:
          "L iPhone 7 et l iPhone 7 Plus sont les deux modèles de la 10e génération du smartphone de la société Apple",
        imagePath:
          "./assets/img/images_coques_iphones/iphonesX/housse-cuir-apple-iphone-x.jpg",
        price: "150"
      },
      {
        id: 3,
        title: "Iphone X",
        description:
          "L iPhone 7 et l iPhone 7 Plus sont les deux modèles de la 10e génération du smartphone de la société Apple",
        imagePath:
          "./assets/img/images_coques_iphones/iphonesX/housse-cuir-apple-iphone-x (1).jpg",
        price: "135"
      },
      {
        id: 4,
        title: "Iphone X",
        description:
          "L iPhone Xs et l iPhone Xs Max sont les deux modèles de la douzième génération du smartphone de la société Apple.",
        imagePath:
          "./assets/img/images_coques_iphones/iphonesX/housse-cuir-apple-iphone-x (2).jpg",
        price: "110"
      },
      {
        id: 5,
        title: "Iphone X",
        description: "La 10e génération du smartphone de la société Apple.",
        imagePath:
          "./assets/img/images_coques_iphones/iphonesX/pochette-cuir-apple-iphone-x.jpg",
        price: "80"
      },
      {
        id: 6,
        title: "Iphone Xs",
        description:
          "L iPhone Xs et l iPhone Xs Max sont les deux modèles de la douzième génération du smartphone de la société Apple.",
        imagePath:
          "./assets/img/images_coques_iphones/iphonesX/pochette-cuir-apple-iphone-x.jpg",
        price: "70"
      },
      {
        id: 7,
        title: "Iphone X",
        description:
          "L iPhone Xs et l iPhone Xs Max sont les deux modèles de la douzième génération du smartphone de la société Apple.",
        imagePath:
          "./assets/img/images_coques_iphones/iphonesX/pochette-cuir-apple-iphone-x.jpg",
        price: "100"
      }
    ],
    Iphones7: [
      {
        id: 8,
        title: "Iphone 7",
        description:
          "L iPhone 7 et l iPhone 7 Plus sont les deux modèles de la 10e génération du smartphone de la société Apple",
        imagePath:
          "./assets/img/images_coques_iphones/iphones7/housse-cuir-apple-iphone-7.jpg",
        price: "130"
      },
      {
        id: 9,
        title: "Iphone 7",
        description:
          "L iPhone 7 et l iPhone 7 Plus sont les deux modèles de la 10e génération du smartphone de la société Apple",
        imagePath:
          "./assets/img/images_coques_iphones/iphones7/housse-cuir-apple-iphone-7 (1).jpg",
        price: "150"
      },
      {
        id: 10,
        title: "Iphone 7",
        description:
          "L iPhone 7 et l iPhone 7 Plus sont les deux modèles de la 10e génération du smartphone de la société Apple",
        imagePath:
          "./assets/img/images_coques_iphones/iphones7/housse-cuir-apple-iphone-7 (2).jpg",
        price: "135"
      },
      {
        id: 11,
        title: "Iphone 7",
        description:
          "L iPhone Xs et l iPhone Xs Max sont les deux modèles de la douzième génération du smartphone de la société Apple.",
        imagePath:
          "./assets/img/images_coques_iphones/iphones7/housse-cuir-apple-iphone-7 (3).jpg",
        price: "110"
      },
      {
        id: 12,
        title: "Iphone 7",
        description: "La 10e génération du smartphone de la société Apple.",
        imagePath:
          "./assets/img/images_coques_iphones/iphones7/housse-cuir-apple-iphone-7 (4).jpg",
        price: "80"
      },
      {
        id: 13,
        title: "Iphone 7",
        description:
          "L iPhone Xs et l iPhone Xs Max sont les deux modèles de la douzième génération du smartphone de la société Apple.",
        imagePath:
          "./assets/img/images_coques_iphones/iphones7/housse-cuir-apple-iphone-7 (4).jpg",
        price: "70"
      },
      {
        id: 14,
        title: "Iphone 7",
        description:
          "L iPhone Xs et l iPhone Xs Max sont les deux modèles de la douzième génération du smartphone de la société Apple.",
        imagePath:
          "./assets/img/images_coques_iphones/iphones7/housse-cuir-apple-iphone-7 (4).jpg",
        price: "100"
      }
    ],
    Ipads2: [
      {
        id: 15,
        title: "Ipad 2",
        description:
          "L iPhone 7 et l iPhone 7 Plus sont les deux modèles de la 10e génération du smartphone de la société Apple",
        imagePath:
          "./assets/img/images_coques_ipad/housse-cuir-apple-ipad-pro-129-2018 (1).jpg",
        price: "150"
      },
      {
        id: 16,
        title: "Ipad 2",
        description:
          "L iPhone 7 et l iPhone 7 Plus sont les deux modèles de la 10e génération du smartphone de la société Apple",
        imagePath:
          "./assets/img/images_coques_ipad/housse-cuir-apple-ipad-pro-129-2018.jpg",
        price: "200"
      }
    ],
    Liquids2: [
      {
        id: 17,
        title: "Liquid s2",
        description:
          "L iPhone 7 et l iPhone 7 Plus sont les deux modèles de la 10e génération du smartphone de la société Apple",
        imagePath:
          "./assets/img/images_coques_acer_smartphone/housse-cuir-acer-allegro.jpg",
        price: "210"
      }
    ],
    Allegro: [
      {
        id: 18,
        title: "Allegro",
        description:
          "L iPhone 7 et l iPhone 7 Plus sont les deux modèles de la 10e génération du smartphone de la société Apple",
        imagePath:
          "./assets/img/images_coques_acer_smartphone/housse-cuir-acer-iconia-smart.jpg",
        price: "220"
      }
    ],
    Iconiasmart: [
      {
        id: 19,
        title: "IconiaSmart",
        description:
          "L iPhone 7 et l iPhone 7 Plus sont les deux modèles de la 10e génération du smartphone de la société Apple",
        imagePath:
          "./assets/img/images_coques_acer_smartphone/housse-cuir-acer-liquid-express.jpg",
        price: "230"
      }
    ],
    Liquidexpress: [
      {
        id: 20,
        title: "Liquidexpress",
        description:
          "L iPhone 7 et l iPhone 7 Plus sont les deux modèles de la 10e génération du smartphone de la société Apple",
        imagePath:
          "./assets/img/images_coques_acer_smartphone/housse-cuir-acer-liquid-metal.jpg",
        price: "240"
      }
    ],
    liquidmetal: [
      {
        id: 21,
        title: "liquidmetal",
        description:
          "L iPhone 7 et l iPhone 7 Plus sont les deux modèles de la 10e génération du smartphone de la société Apple",
        imagePath:
          "./assets/img/images_coques_acer_smartphone/housse-cuir-acer-liquid-s2.jpg",
        price: "250"
      }
    ]
  };

  // méthodes

  // retourne la valeur du tableau d'id
  getArrayLenght(array: string) {
    let string = "this.articles." + array;
    let object = eval(string);
    var length = 0;

    for (var obj in object) {
      if (object.hasOwnProperty(obj)) {
        length++;
      }
    }
    return length;
  }

  // retourne la valeur de l'objet du tableau en fonction de l'id du produit
  getObjectById(idFetching: number) {
    let un_article: any;
    let string: string;
    let article: any;

    for (let object in this.articles) {
      string = "this.articles." + object;
      article = eval(string).find((s: any) => {
        return s.id == idFetching;
      });

      if (typeof article !== "undefined") {
        if (article.id == idFetching) {
          return object;
        }
      }
    }
  }

  //obtenir la position d'un article à l'intérieur de son objet principal ( indexof article dans sa catégorie)
  getPositionArticle(idFetching: number) {
    let un_article: any;
    let string: string;
    let string2: string;
    let article: any;
    let position: number;
    let result: any;

    for (let object in this.articles) {
      string = "this.articles." + object;
      article = eval(string).find((s: any) => {
        return s.id == idFetching;
      });

      if (typeof article !== "undefined") {
        if (article.id == idFetching) {
          string2 = "this.articles." + object + ".indexOf(article)";
          result = eval(string2);
          return result;
        }
      }
    }
  }

  // ajouter un id au panier
  pushIdInCard(idToPush: number) {
    this.idCard.push(idToPush);
  }

  // rechercher un élément dans les titres des articles
  rechercherCategorie(elementARechercher: string) {
    let length = 0;
    let tableauProvisoire = [""];
    let tableauIdResultats = [0];
    let article: any;
    let j = 1;

    elementARechercher = elementARechercher.replace(" ", ""); // Enlève les espaces
    elementARechercher = elementARechercher.toLowerCase(); // tout en minuscule
    elementARechercher =
      elementARechercher.charAt(0).toUpperCase() + elementARechercher.slice(1); //premiere lettre en majuscule

    // remplissage d'un tableau temporaire avec le nom des objets pricipaux dedans
    for (let obj in this.articles) {
      tableauProvisoire.push(obj);
    }

    // on applique un filtre qui regarde si le titre de chaque acticle de l'objet pricipal correspond ou pas à la recherche

    let result = tableauProvisoire.filter(
      obj => obj.toString() == elementARechercher
    ); // si on veut affiner les arguments de la recherche plutôt que de renvoyer les éléments dont le titre est exactement égal à la recherche

    return result[0];
  }

  // rechercher un élément dans les titres des articles
  rechercher(elementARechercher: string) {
    let length = 0;
    let tableauProvisoire = [""];
    let tableauIdResultats = [0];
    let article: any;
    let j = 1;
    // remplissage d'un tableau temporaire avec le nom des objets pricipaux dedans
    for (let obj in this.articles) {
      tableauProvisoire.push(obj);
    }

    // on passe sur chaque objet du tableau
    for (let k = 1; k < tableauProvisoire.length; k++) {
      let object = tableauProvisoire[k];
      let string = "this.articles." + object;

      // on applique un filtre qui regarde si le titre de chaque acticle de l'objet pricipal correspond ou pas à la recherche

      let result = eval(string).filter(obj => obj.title == elementARechercher); // si on veut affiner les arguments de la recherche plutôt que de renvoyer les éléments dont le titre est exactement égal à la recherche

      //remplie le tableau des résultat avec le tableau du filtre obtenu en prenant que l'id des objets
      for (let l = 0; l < result.length; l++) {
        tableauIdResultats.push(result[l].id);
      }
    }

    return tableauIdResultats;
  }

  //reinitialise le prix du panier à 0 visuellement
  reinitialiserPrix() {
    if (!document.getElementById("aucunArticle")) {
      var aucunArticle = document.createElement("div");
      aucunArticle.innerHTML = "Aucun article";
      aucunArticle.style.textAlign = "center";
      aucunArticle.id = "aucunArticle";
      document.getElementById("itemContainer").appendChild(aucunArticle);
      document.getElementById("priceDiv").innerHTML = "0 €";
      document.getElementById("TVADiv").innerHTML = "0 €";
      document.getElementById("totalPriceDiv").innerHTML = "0 €";
    }
  }

  // rechercher si un id appartient au panier
  isIdInCard(id: number, index: number) {
    let tableauProvisoire = [0];

    for (var i = 0; i < index; i++) {
      tableauProvisoire[i] = this.idCard[i];
    }

    let result = tableauProvisoire.includes(id);
    return result;
  }

  //compter le nombre d'éléements d'un même ID dans le panier
  countInCard(id: number) {
    let count = 0;
    for (var i = 0; i < this.idCard.length; i++) {
      if (this.idCard[i] == id) count++;
    }
    return count;
  }

  // recupérer le prix total du panier
  retrievePriceCard() {
    let i: number = 1;
    let j: number = 0;
    let priceArray: number[] = [0];
    let priceString: string;
    let price: number;
    let id: number;
    let object: any;
    let totalPrice: number = 0;
    let articleHomeService: string;

    if (this.idCard.length == 1) {
      return 0;
    }

    do {
      id = this.idCard[i];
      let object = this.getObjectById(id);
      let position = this.getPositionArticle(id);
      articleHomeService = "this.articles.";
      articleHomeService =
        articleHomeService + object + "[" + position + "]" + ".price";
      priceString = eval(articleHomeService);
      price = parseInt(priceString, 10);

      priceArray.push(price);
      i++;
    } while (i < this.idCard.length);

    for (j = 0; j < priceArray.length; j++) {
      totalPrice += priceArray[j];
    }
    return totalPrice;
  }

  //constructeur
  constructor(private http: HttpClient) {}

  //partie PHP ( c'est du typescript)

  getProduitDetails(): Observable<any> {
    console.log("test1");
    return this.http.get("http://localhost:3015/produit");
  }
}
