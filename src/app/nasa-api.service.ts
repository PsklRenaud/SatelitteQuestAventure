import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class NasaAPIService {

  private machin:Http

  constructor(param_planet:Http) { 
    this.machin = param_planet
  }
}
