import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { EventDataService } from '../../../services/event-data.service';
import { SpeakerCardComponent } from '../../shared/ui/speaker-card.component/speaker-card.component';

@Component({
  selector: 'app-speakers.component',
  imports: [RouterLink, SpeakerCardComponent],
  templateUrl: './speakers.component.html',
  styleUrl: './speakers.component.css',
})
export class SpeakersComponent {
  private readonly eventData = inject(EventDataService);
  readonly speakers = toSignal(this.eventData.getSpeakers(), { initialValue: [] });

  slugify(value: string): string {
    return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }
}
