import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConnexionAPIService {
  private service: Http;
  constructor(p_service: Http) { 
    this.service = p_service; 
  }
  public getPlanetImages(param_search: string): Observable<Array<string>> {

    // On construit l'url qui nous permet d'interroger l'API  de la NASA
    let url: string = "https://images-api.nasa.gov/search";
    url += "?q=" + param_search + "";
    url += "&media_type=image";

    // ici on utilise la méthode "get()" du service Http, selon la documentation
    // celui nous renvoie un Observable<Response>, çàd qu'il nous promet 
    // de nous retourner un objet de type Response. 


    // NB: un Objet de type Response est un objet générique qui nous permet 
    // de retrouver les informations "brutes" retournées par le serveur 
    // ( ici les données retournées par l'API de la NASA)
    const obs1:Observable<Response> = this.service.get(url);

    
    // ici, on "couple" notre Observable à une suite de fonctions nous permettant de réceptionner 
    // et de transformer la donnée brute, issue de notre objet de type Response, en un jeu 
    // de données répondant à nos attentes.... Et l'on retourne le résultat de ce couplage 
    // qui nous donne un Observable<string[]>
    return obs1.pipe(
                                      map(

                                        // on définit ici la fonction se chargeant de réceptionner l'objet de type 
                                        // Response promis par le premier observable ...
                                        // Le paramètre est donc un objet de type Response et 
                                        // l'on indique que cette fonction retourne un tableau de chaînes de caractères
                                        (data: Response): string[] => {
                                  
                                          // tout d'abord, on transforme la donnée brute issue du serveur ( au format JSON )
                                          // en un objet de type "any" que l'on stocke au sein d'une variable
                                          let raw: any = data.json();

                                          // on va chercher le tableau que l'on cherche au sein de l'objet ainsi crée ( voir documentation NASA plus haut )
                                          let items: Array<any> = raw.collection.items;
                                          let i: number = items.length;

                                          // on déclare un taleau vide, qui accueillera nos résultats 
                                          let images: Array<string> = new Array<string>();
                                  
                                          // on boucle sur le tableau 
                                          while (--i > -1) {
                                            // et on va chercher les liens vers les images pour les stocker dans notre 
                                            // tableau de résultats ..
                                            images.push(items[i].links[0].href);
                                          }
                                  
                                          // puis l'on retourne le tableau de résultats
                                          
                                          return images;
                                  
                                        }
                                      )
                                );
  }




}
