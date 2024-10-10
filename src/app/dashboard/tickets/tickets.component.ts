import { v4 as uuidv4 } from 'uuid';

import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { NewTicket, Ticket } from './ticket.model';
import { TicketComponent } from './ticket/ticket.component';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {
  tickets: Ticket[] = [];

  onAdd(newTicket: NewTicket) {
    const ticket: Ticket = {
      title: newTicket.title,
      request: newTicket.request,
      id: uuidv4(),
      status: 'open',
    };
    this.tickets.push(ticket);
  }

  onCloseTicket(id: string) {
    this.tickets = this.tickets.map((ticket) => {
      if (ticket.id === id) {
        return { ...ticket, status: 'closed' };
      }
      return ticket;
    });
  }
}
