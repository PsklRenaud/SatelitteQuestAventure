import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-niveau2-page',
  templateUrl: './niveau2-page.component.html',
  styleUrls: ['./niveau2-page.component.css']
})
export class Niveau2PageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  moveToHouston() {
    const houstonPage = document.getElementById("houston-page");
    houstonPage.classList.remove("hidden");
  }
}
