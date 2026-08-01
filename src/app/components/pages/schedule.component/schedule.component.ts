import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { EventDataService } from '../../../services/event-data.service';
import { EventCardComponent } from '../../shared/ui/event-card.component/event-card.component';

@Component({
  selector: 'app-schedule.component',
  imports: [EventCardComponent],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css',
})
export class ScheduleComponent {
  private readonly eventData = inject(EventDataService);
  readonly sessions = toSignal(this.eventData.getSessions(), { initialValue: null });
}
