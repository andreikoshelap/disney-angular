import {unitOfTime} from "moment";

export interface TicketModel {
  ticketNumber: string;
  timePurchase : unitOfTime;
}
