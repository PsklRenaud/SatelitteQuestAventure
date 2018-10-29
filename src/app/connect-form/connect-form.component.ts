import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'connect-form',
  templateUrl: './connect-form.component.html',
  styleUrls: ['./connect-form.component.css']
})

export class ConnectFormComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
    
    // ------------------ Switch Forms --------------------------
    
    const WelcomePageFormsButtons = document.getElementsByClassName("WelcomePage-Forms-choice");
    const WelcomePageForms = document.getElementsByClassName("welcomePage-Forms");
    const background = document.getElementById("welcomePage-background");
    const backgroundImage = document.getElementById("welcomePage-image-container");

    WelcomePageFormsButtons[0].addEventListener("click", function():void {
        if (WelcomePageForms[0].classList.contains("hidden")) {
          // change form
          WelcomePageForms[0].classList.remove("hidden");
          WelcomePageForms[1].classList.add("hidden");
          // change button
          WelcomePageFormsButtons[0].classList.add("WelcomePage-Forms-choice-select");
          WelcomePageFormsButtons[0].classList.remove("WelcomePage-Forms-choice-unselect");
          WelcomePageFormsButtons[1].classList.add("WelcomePage-Forms-choice-unselect");
          WelcomePageFormsButtons[1].classList.remove("WelcomePage-Forms-choice-select");
          // change background
          background.classList.add("welcomePage-background-new");
          background.classList.remove("welcomePage-background-login");
          // change Image
          backgroundImage.classList.add("welcomePage-image-container1");
          backgroundImage.classList.remove("welcomePage-image-container2");
        }
    });

    WelcomePageFormsButtons[1].addEventListener("click", function():void {
      if (WelcomePageForms[1].classList.contains("hidden")) {
        // change form
        WelcomePageForms[1].classList.remove("hidden");
        WelcomePageForms[0].classList.add("hidden");
        // change button
        WelcomePageFormsButtons[1].classList.add("WelcomePage-Forms-choice-select");
        WelcomePageFormsButtons[1].classList.remove("WelcomePage-Forms-choice-unselect");
        WelcomePageFormsButtons[0].classList.add("WelcomePage-Forms-choice-unselect");
        WelcomePageFormsButtons[0].classList.remove("WelcomePage-Forms-choice-select");
        // change background
        background.classList.add("welcomePage-background-login");
        background.classList.remove("welcomePage-background-new");
        // change Image
        backgroundImage.classList.add("welcomePage-image-container2");
        backgroundImage.classList.remove("welcomePage-image-container1");
      }
    });

    
    }
    // ------------------ Button --------------------------
    
 

}


