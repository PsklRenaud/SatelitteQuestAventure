import { Component, OnInit } from '@angular/core';
import { ConnexionAPIService } from '../connexion-api.service';
import {ConnexionAPI} from '../connexion-api';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recompense-moon',
  templateUrl: './recompense-moon.component.html',
  styleUrls: ['./recompense-moon.component.css']
})
export class RecompenseMoonComponent implements OnInit {

  
  public travelInfo: ConnexionAPI = null;
  // cette propriété est censée contenir l'url d'une image, dans notre cas 
  // on chercher à l'obtenir depuis l'api de la NASA
  public img: string[];
  private service: ConnexionAPIService;
    // ici, les 4 images des planetes
  // public imgPlanete1:string="background-image:url("+this.img[6]+")" ;



  constructor( 
    param_nasa_service: ConnexionAPIService
    ) { 
    this.service = param_nasa_service;
    // par défaut, l'url de notre image est vide
    this.img = [];
    this.travelInfo = new ConnexionAPI("moon","lunar")
    }


  ngOnInit() {
    // partie API
    const obs: Observable<string[]> = this.service.getPlanetImages(this.travelInfo.planet);

    // il faut souscrire à un observable pour le déclencher et récupérer les infos ...
    obs.subscribe(
                // ici, on définit une fonction qui sera appelée lorsque les données 
                // que l'on nous a promis sont disponibles ... 
                // on déclare donc un paramètre qui va réceptionner notre tableau de 
                // de chaînes de caractères 
                (param_images_urls: string[]) => {
                  // this.img = param_images_urls;
                  // et on en choisit une ( ici la première )
                  this.img = param_images_urls;
                  console.log("bip " + this.img);
                  
          

                }
                
    );

    
        

    //fonction carousel
    const bigImg= document.getElementById("bigImg");
    const thumb2b= document.getElementById("thumb2b");
    const thumb3b= document.getElementById("thumb3b");
    const thumb4b= document.getElementById("thumb4b");
    const thumb1= document.getElementById("thumb1");
    const thumb2= document.getElementById("thumb2");
    const thumb3= document.getElementById("thumb3");
    const thumb4= document.getElementById("thumb4");
   

    thumb1.style.backgroundImage = "url(" + this.img[6] + ")";
    
    thumb1.addEventListener("click", function() {
      bigImg.classList.remove("hidden");
      thumb2b.classList.add("hidden")
      thumb3b.classList.add("hidden")
      thumb4b.classList.add("hidden");
    });
    thumb2.addEventListener("click", function() {
      bigImg.classList.add("hidden");
      thumb2b.classList.remove("hidden")
      thumb3b.classList.add("hidden")
      thumb4b.classList.add("hidden");
    });
    thumb3.addEventListener("click", function() {
      bigImg.classList.add("hidden");
      thumb2b.classList.add("hidden")
      thumb3b.classList.remove("hidden")
      thumb4b.classList.add("hidden");
    });
    thumb4.addEventListener("click", function() {
      bigImg.classList.add("hidden");
      thumb2b.classList.add("hidden")
      thumb3b.classList.add("hidden")
      thumb4b.classList.remove("hidden");
    });


   
  }


}
