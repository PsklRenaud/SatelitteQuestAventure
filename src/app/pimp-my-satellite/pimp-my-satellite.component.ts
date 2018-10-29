import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pimp-my-satellite',
  templateUrl: './pimp-my-satellite.component.html',
  styleUrls: ['./pimp-my-satellite.component.css']
})
export class PimpMySatelliteComponent implements OnInit {

  public coordonate:any = {
    satelliteName: "My Satellite Name",
    email: "My actual Level",
    location: "My actual Location",
  };

  constructor() { 
  }

  // Switch Windows ( Satellite/Custom ) Buttons 
  switchWindowSatellite() {
    if ( document.getElementById("pimp-forms-button-satellite").classList.contains("pimp-forms-button-unselect") ) {
      document.getElementById("pimp-forms-button-satellite").classList.remove("pimp-forms-button-unselect");
      document.getElementById("pimp-forms-button-custom").classList.add("pimp-forms-button-unselect");
      document.getElementById("pimp-forms-satellite").classList.remove("hidden");
      document.getElementById("pimp-forms-custom").classList.add("hidden");
    }
  }
  switchWindowCustom() {
    if ( document.getElementById("pimp-forms-button-custom").classList.contains("pimp-forms-button-unselect") ) {
      document.getElementById("pimp-forms-button-custom").classList.remove("pimp-forms-button-unselect");
      document.getElementById("pimp-forms-button-satellite").classList.add("pimp-forms-button-unselect");
      document.getElementById("pimp-forms-satellite").classList.add("hidden");
      document.getElementById("pimp-forms-custom").classList.remove("hidden");
    }
  }
  // Buttons défilement Palette
  showCenter() {
    if ( document.getElementById("pimp-satellite-center-to-hide").classList.contains("hidden")) {
      document.getElementById("pimp-satellite-center-to-hide").classList.remove("hidden");
      document.getElementById("pimp-satellite-solar-to-hide").classList.add("hidden");
      document.getElementById("pimp-satellite-antenna-to-hide").classList.add("hidden");
    } else {
      document.getElementById("pimp-satellite-center-to-hide").classList.add("hidden");
    }
  }
  showSolarPanels() {
    if ( document.getElementById("pimp-satellite-solar-to-hide").classList.contains("hidden")) {
      document.getElementById("pimp-satellite-solar-to-hide").classList.remove("hidden");
      document.getElementById("pimp-satellite-center-to-hide").classList.add("hidden");
      document.getElementById("pimp-satellite-antenna-to-hide").classList.add("hidden");
    } else {
      document.getElementById("pimp-satellite-solar-to-hide").classList.add("hidden");
    }
  };
  showAntenna() {
    if ( document.getElementById("pimp-satellite-antenna-to-hide").classList.contains("hidden")) {
      document.getElementById("pimp-satellite-antenna-to-hide").classList.remove("hidden");
      document.getElementById("pimp-satellite-center-to-hide").classList.add("hidden");
      document.getElementById("pimp-satellite-solar-to-hide").classList.add("hidden");
    } else {
      document.getElementById("pimp-satellite-antenna-to-hide").classList.add("hidden");
    }
  };

  // Body

  showBodySquare() {
    let SatelliteBody = document.getElementById("pimp-satellite-body");
    if (SatelliteBody.classList.contains("pimp-satellite-body-square")){
    } else {
      SatelliteBody.classList.add("pimp-satellite-body-square");
      SatelliteBody.classList.remove("pimp-satellite-body-round");
      SatelliteBody.classList.remove("pimp-satellite-body-octo");
      // button img
      document.getElementById("pimp-satellite-center-square-img").classList.add("pimp-satellite-center-square-img-select");
      document.getElementById("pimp-satellite-center-round-img").classList.add("pimp-satellite-center-round-img-unselect");
      document.getElementById("pimp-satellite-center-octo-img").classList.add("pimp-satellite-center-octo-img-unselect");
      document.getElementById("pimp-satellite-center-round-img").classList.remove("pimp-satellite-center-round-img-select");
      document.getElementById("pimp-satellite-center-octo-img").classList.remove("pimp-satellite-center-octo-img-select");
    }
  }
  showBodyRound() {
    let SatelliteBody = document.getElementById("pimp-satellite-body");
    if (SatelliteBody.classList.contains("pimp-satellite-body-round")){
    } else {
      SatelliteBody.classList.add("pimp-satellite-body-round");
      SatelliteBody.classList.remove("pimp-satellite-body-square");
      SatelliteBody.classList.remove("pimp-satellite-body-octo");
      // button img
      document.getElementById("pimp-satellite-center-round-img").classList.add("pimp-satellite-center-round-img-select");
      document.getElementById("pimp-satellite-center-square-img").classList.add("pimp-satellite-center-square-img-unselect");
      document.getElementById("pimp-satellite-center-octo-img").classList.add("pimp-satellite-center-octo-img-unselect");
      document.getElementById("pimp-satellite-center-square-img").classList.remove("pimp-satellite-center-square-img-select");
      document.getElementById("pimp-satellite-center-octo-img").classList.remove("pimp-satellite-center-octo-img-select");
    }
  }
  showBodyOcto() {
    let SatelliteBody = document.getElementById("pimp-satellite-body");
    if (SatelliteBody.classList.contains("pimp-satellite-body-octo")){
    } else {
      SatelliteBody.classList.add("pimp-satellite-body-octo");
      SatelliteBody.classList.remove("pimp-satellite-body-round");
      SatelliteBody.classList.remove("pimp-satellite-body-square");
      // button img
      document.getElementById("pimp-satellite-center-octo-img").classList.add("pimp-satellite-center-octo-img-select");
      document.getElementById("pimp-satellite-center-round-img").classList.add("pimp-satellite-center-round-img-unselect");
      document.getElementById("pimp-satellite-center-square-img").classList.add("pimp-satellite-center-square-img-unselect");
      document.getElementById("pimp-satellite-center-round-img").classList.remove("pimp-satellite-center-round-img-select");
      document.getElementById("pimp-satellite-center-square-img").classList.remove("pimp-satellite-center-square-img-select");
    }
  }
  
  showSolarPanelsLong(){
    let SatellitePanelLeft = document.getElementById("pimp-satellite-solar-left");
    let SatellitePanelRight = document.getElementById("pimp-satellite-solar-right");
    if (SatellitePanelLeft.classList.contains("pimp-satellite-solar-left-long")){
    } else {
      SatellitePanelLeft.classList.add("pimp-satellite-solar-left-long");
      SatellitePanelRight.classList.add("pimp-satellite-solar-right-long");

      SatellitePanelLeft.classList.remove("pimp-satellite-solar-left-wave");
      SatellitePanelRight.classList.remove("pimp-satellite-solar-right-wave");

      SatellitePanelLeft.classList.remove("pimp-satellite-solar-left-circle");
      SatellitePanelRight.classList.remove("pimp-satellite-solar-right-circle");

      // button img
      document.getElementById("pimp-satellite-solar-long-img").classList.add("pimp-satellite-solar-long-img-select");
      document.getElementById("pimp-satellite-solar-wave-img").classList.add("pimp-satellite-solar-wave-img-unselect");
      document.getElementById("pimp-satellite-solar-circle-img").classList.add("pimp-satellite-solar-circle-img-unselect");

      document.getElementById("pimp-satellite-solar-wave-img").classList.remove("pimp-satellite-solar-wave-img-select");
      document.getElementById("pimp-satellite-solar-circle-img").classList.remove("pimp-satellite-solar-circle-img-select");
    }
  }
  showSolarPanelsWave(){
    let SatellitePanelLeft = document.getElementById("pimp-satellite-solar-left");
    let SatellitePanelRight = document.getElementById("pimp-satellite-solar-right");
    if (SatellitePanelLeft.classList.contains("pimp-satellite-solar-left-wave")){
    } else {
      SatellitePanelLeft.classList.add("pimp-satellite-solar-left-wave");
      SatellitePanelRight.classList.add("pimp-satellite-solar-right-wave");

      SatellitePanelLeft.classList.remove("pimp-satellite-solar-left-long");
      SatellitePanelRight.classList.remove("pimp-satellite-solar-right-long");

      SatellitePanelLeft.classList.remove("pimp-satellite-solar-left-circle");
      SatellitePanelRight.classList.remove("pimp-satellite-solar-right-circle");

      // button img
      document.getElementById("pimp-satellite-solar-wave-img").classList.add("pimp-satellite-solar-wave-img-select");
      document.getElementById("pimp-satellite-solar-long-img").classList.add("pimp-satellite-solar-long-img-unselect");
      document.getElementById("pimp-satellite-solar-circle-img").classList.add("pimp-satellite-solar-circle-img-unselect");

      document.getElementById("pimp-satellite-solar-long-img").classList.remove("pimp-satellite-solar-long-img-select");
      document.getElementById("pimp-satellite-solar-circle-img").classList.remove("pimp-satellite-solar-circle-img-select");

    }
  }
  showSolarPanelsCircle(){
    let SatellitePanelLeft = document.getElementById("pimp-satellite-solar-left");
    let SatellitePanelRight = document.getElementById("pimp-satellite-solar-right");
    if (SatellitePanelLeft.classList.contains("pimp-satellite-solar-left-circle")){
    } else {
      SatellitePanelLeft.classList.add("pimp-satellite-solar-left-circle");
      SatellitePanelRight.classList.add("pimp-satellite-solar-right-circle");

      SatellitePanelLeft.classList.remove("pimp-satellite-solar-left-wave");
      SatellitePanelRight.classList.remove("pimp-satellite-solar-right-wave");

      SatellitePanelLeft.classList.remove("pimp-satellite-solar-left-long");
      SatellitePanelRight.classList.remove("pimp-satellite-solar-right-long");

      // button img
      document.getElementById("pimp-satellite-solar-circle-img").classList.add("pimp-satellite-solar-circle-img-select");
      document.getElementById("pimp-satellite-solar-wave-img").classList.add("pimp-satellite-solar-wave-img-unselect");
      document.getElementById("pimp-satellite-solar-long-img").classList.add("pimp-satellite-solar-long-img-unselect");

      document.getElementById("pimp-satellite-solar-wave-img").classList.remove("pimp-satellite-solar-wave-img-select");
      document.getElementById("pimp-satellite-solar-long-img").classList.remove("pimp-satellite-solar-long-img-select");

    }
  }

  showAntennaLight() {
    let SatelliteAntenna = document.getElementById("pimp-satellite-antenna");
    if (SatelliteAntenna.classList.contains("pimp-satellite-antenna-light")){
    } else {
      SatelliteAntenna.classList.add("pimp-satellite-antenna-light");
      SatelliteAntenna.classList.remove("pimp-satellite-antenna-heavy");
      SatelliteAntenna.classList.remove("pimp-satellite-antenna-multiple");
      // button img
      document.getElementById("pimp-satellite-antenna-light-img").classList.add("pimp-satellite-antenna-light-img-select");
      document.getElementById("pimp-satellite-antenna-heavy-img").classList.add("pimp-satellite-antenna-heavy-img-unselect");
      document.getElementById("pimp-satellite-antenna-multiple-img").classList.add("pimp-satellite-antenna-multiple-img-unselect");
      document.getElementById("pimp-satellite-antenna-heavy-img").classList.remove("pimp-satellite-antenna-heavy-img-select");
      document.getElementById("pimp-satellite-antenna-multiple-img").classList.remove("pimp-satellite-antenna-multiple-img-select");
    }

  }
  showAntennaHeavy() {
    let SatelliteAntenna = document.getElementById("pimp-satellite-antenna");
    if (SatelliteAntenna.classList.contains("pimp-satellite-antenna-heavy")){
    } else {
      SatelliteAntenna.classList.add("pimp-satellite-antenna-heavy");
      SatelliteAntenna.classList.remove("pimp-satellite-antenna-light");
      SatelliteAntenna.classList.remove("pimp-satellite-antenna-multiple");
      // button img
      document.getElementById("pimp-satellite-antenna-heavy-img").classList.add("pimp-satellite-antenna-heavy-img-select");
      document.getElementById("pimp-satellite-antenna-light-img").classList.add("pimp-satellite-antenna-light-img-unselect");
      document.getElementById("pimp-satellite-antenna-multiple-img").classList.add("pimp-satellite-antenna-multiple-img-unselect");
      document.getElementById("pimp-satellite-antenna-light-img").classList.remove("pimp-satellite-antenna-light-img-select");
      document.getElementById("pimp-satellite-antenna-multiple-img").classList.remove("pimp-satellite-antenna-multiple-img-select");
    }
  }
  showAntennaMultiple() {
    let SatelliteAntenna = document.getElementById("pimp-satellite-antenna");
    if (SatelliteAntenna.classList.contains("pimp-satellite-antenna-multiple")){
    } else {
      SatelliteAntenna.classList.add("pimp-satellite-antenna-multiple");
      SatelliteAntenna.classList.remove("pimp-satellite-antenna-heavy");
      SatelliteAntenna.classList.remove("pimp-satellite-antenna-light");
      // button img
      document.getElementById("pimp-satellite-antenna-multiple-img").classList.add("pimp-satellite-antenna-multiple-img-select");
      document.getElementById("pimp-satellite-antenna-heavy-img").classList.add("pimp-satellite-antenna-heavy-img-unselect");
      document.getElementById("pimp-satellite-antenna-light-img").classList.add("pimp-satellite-antenna-light-img-unselect");
      document.getElementById("pimp-satellite-antenna-heavy-img").classList.remove("pimp-satellite-antenna-heavy-img-select");
      document.getElementById("pimp-satellite-antenna-light-img").classList.remove("pimp-satellite-antenna-light-img-select");
    }
  }

  ngOnInit() {
  }
  
}
