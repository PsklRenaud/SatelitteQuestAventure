import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  showMenu() {
    const bigMenu = document.getElementById("bigMenu");
    const logo = document.getElementById("logo");
    if (bigMenu.classList.contains("hidden")) {
      bigMenu.classList.remove("hidden");
      bigMenu.classList.add("Onit");
      logo.classList.add("Onit2");
      logo.classList.add("logo")
    } else {
      bigMenu.classList.add("hidden");
      bigMenu.classList.remove("Onit");
      logo.classList.remove("Onit2");
      logo.classList.remove("logo")
    }
  }
  hideMenu() {
    const bigMenu = document.getElementById("bigMenu");
    const logo = document.getElementById("logo");
    bigMenu.classList.add("hidden");
    bigMenu.classList.remove("Onit");
    logo.classList.remove("logo")
  }
}
