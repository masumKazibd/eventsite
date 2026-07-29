import { Component, Input } from '@angular/core';
import { SessionEvent } from '../../../../models/schedule.model';

@Component({
  selector: 'app-event-card.component',
  imports: [],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.css',
})
export class EventCardComponent {
  @Input() event: SessionEvent | null = null;
  @Input() showTrack = true;
}
