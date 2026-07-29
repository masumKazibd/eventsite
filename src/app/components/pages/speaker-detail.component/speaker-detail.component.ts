import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { switchMap } from 'rxjs';
import { EventDataService } from '../../../services/event-data.service';

@Component({
  selector: 'app-speaker-detail.component',
  imports: [RouterLink],
  templateUrl: './speaker-detail.component.html',
  styleUrl: './speaker-detail.component.css',
})
export class SpeakerDetailComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly eventData = inject(EventDataService);

  readonly speaker = toSignal(
    this.route.paramMap.pipe(switchMap(params => this.eventData.getSpeakerBySlug(params.get('slug') ?? ''))),
    { initialValue: null },
  );

  readonly sessions = toSignal(this.eventData.getSessions(), { initialValue: null });

  get relatedEvents() {
    const speaker = this.speaker();
    const sessionData = this.sessions();

    if (!speaker || !sessionData) {
      return [];
    }

    return sessionData.days.flatMap(day => day.events.filter(event => event.speakerId === speaker.id));
  }
}
