import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {SharedService} from "./shared.service";
import {HttpClient} from "@angular/common/http";
import {SiteSearch} from "../components/search/site-search-model";
import {SiteList} from "../components/list/site-list-model";

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  private readonly SERVER_URL: string
  private readonly SEARCH:string

  constructor(private shared:SharedService,
              private http:HttpClient) {
    this.SERVER_URL = this.shared.getServerURL();
    this.SEARCH = 'api/site/search';
  }

  getSites(siteSearch:SiteSearch): Observable<SiteList>{
    return  this.http.post<SiteList>(this.SEARCH, siteSearch);

  }

  search(siteSearch: SiteSearch): Observable<SiteList> {
    return this.http.post<SiteList>(this.SEARCH, siteSearch);
  }
}
