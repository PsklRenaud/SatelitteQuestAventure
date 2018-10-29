import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public errorRouterLink="/niveau1";
  public errorText = "It seems that you landed in a black hole. But like the movie Interestellar taught us, this is not the end."

}
