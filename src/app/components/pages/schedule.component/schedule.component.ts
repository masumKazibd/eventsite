import { Component, inject } from '@angular/core';
import { EventDataService } from '../../../services/event-data.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-schedule.component',
  imports: [],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css',
})
export class ScheduleComponent {
  private eventData = inject(EventDataService);
  sessions = toSignal(this.eventData.getSessions(), { initialValue: null });
}
