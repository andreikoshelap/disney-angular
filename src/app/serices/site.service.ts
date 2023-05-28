import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {SiteModel} from "../model/site.model";

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  constructor() { }

  getSites(): SiteModel[]{
    return [
      {position: 1, name: 'West', description: 'West'},
      {position: 2, name: 'Helium', description: 'West'},
      {position: 3, name: 'Lithium', description: 'West'},
      {position: 4, name: 'Beryllium', description: 'West'},
    ];
  }
}
