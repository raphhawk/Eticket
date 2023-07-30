import { Publisher, Subjects, TicketUpdateddEvent } from "@rh-eticket/common";

export class TicketUpdateddPublisher extends Publisher<TicketUpdateddEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}
