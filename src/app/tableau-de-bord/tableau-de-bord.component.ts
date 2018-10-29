import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tableau-de-bord',
  templateUrl: './tableau-de-bord.component.html',
  styleUrls: ['./tableau-de-bord.component.css']
})
export class TableauDeBordComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    

// Bouton left and Right
//     var button = document.getElementById('tableau-de-bord-nav-button-right');
//     button.onclick = function () {
//       var container = document.getElementById('tableau-de-bord-Background');
//       sideScroll(container,'right',25,100,10);
//     };

// var back = document.getElementById('tableau-de-bord-nav-button-left');
// back.onclick = function () {
//     var container = document.getElementById('tableau-de-bord-Background');
//     sideScroll(container,'left',25,100,10);
// };

// function sideScroll(element,direction,speed,distance,step){
//     let scrollAmount = 0;
//     let slideTimer = setInterval(function(){
//         if(direction == 'left'){
//             element.scrollLeft -= step;
//         } else {
//             element.scrollLeft += step;
//         }
//         scrollAmount += step;
//         if(scrollAmount >= distance){
//             window.clearInterval(slideTimer);
//         }
//     }, speed);
// }
  }

}
