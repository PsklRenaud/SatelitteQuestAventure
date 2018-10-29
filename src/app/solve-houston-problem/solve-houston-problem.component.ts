import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solve-houston-problem',
  templateUrl: './solve-houston-problem.component.html',
  styleUrls: ['./solve-houston-problem.component.css']
})
export class SolveHoustonProblemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    const bonneReponse = document.getElementById("bonne-reponse");
    const boutonsReponse = document.getElementById ("boutons-reponses"); 
    const affichelareponse = document.getElementById("AfficherReponse");  
    
    bonneReponse.addEventListener("click", function() {
      boutonsReponse.classList.add("hidden");
      affichelareponse.classList.remove("hidden");
    });


  }
  moveToResponse() {
    const fixedBugPage = document.getElementById("fixed-bug-page");
    fixedBugPage.classList.remove("hidden");
  };
}
