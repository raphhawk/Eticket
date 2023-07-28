import { Publisher, Subjects, TicketCreatedEvent } from "@rh-eticket/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
