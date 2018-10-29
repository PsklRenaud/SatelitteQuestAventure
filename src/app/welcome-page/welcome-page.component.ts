import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'welcome-Page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {


  constructor() { }

  ngOnInit() {

    // const backgroundImage = document.getElementById("welcomePage-image-container");

    // let tID; //we will use this variable to clear the setInterval()
      
    // function animateScript():void {
      
    //   let rocketAnimation=["1","2","3","4","5"]
      
    //   for (let i = 0 ; i < rocketAnimation.length ;i++) {

    //     const  interval = 100; //100 ms of interval for the setInterval()
              
    //     tID = setInterval ( () => {

    //       if (backgroundImage.classList.contains("welcomePage-image-container1-" + [i])) { 
    //         backgroundImage.classList.add("welcomePage-image-container1-" + rocketAnimation[i+1]);
    //         backgroundImage.classList.remove("welcomePage-image-container1" + rocketAnimation[i]);
            
    //       }
          
    //       if (i = 4) {
    //         i = 0
    //       }
          
    //     }, interval ); //end of setInterval
    //   }
    // } //end of animateScript()

  }

}
