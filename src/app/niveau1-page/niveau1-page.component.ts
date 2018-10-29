import { Component, OnInit } from '@angular/core';
// import { RecompenseMoonComponent } from '../recompense-moon/recompense-moon.component';

@Component({
  selector: 'app-niveau1-page',
  templateUrl: './niveau1-page.component.html',
  styleUrls: ['./niveau1-page.component.css']
})
export class Niveau1PageComponent implements OnInit {


  constructor() { 
    

  }

 

  ngOnInit() {
    const bonneReponse = document.getElementById("bonne-reponse");
    const boutonsReponse = document.getElementById ("boutons-reponses"); 
    const affichelareponse = document.getElementById("AfficherReponse"); 
    const pageLune = document.getElementById("recompense-lune")
    
    bonneReponse.addEventListener("click", function() {
      boutonsReponse.classList.add("hidden");
      affichelareponse.classList.remove("hidden");
      pageLune.classList.remove("hidden");
    });

  }

  



}
