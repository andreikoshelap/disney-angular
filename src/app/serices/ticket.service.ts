import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {SharedService} from "./shared.service";

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private readonly TICKET:string

  constructor(private shared:SharedService,
              private http:HttpClient) {
    this.TICKET = 'api/ticket';
  }


}
