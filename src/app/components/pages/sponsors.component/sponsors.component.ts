import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { EventDataService } from '../../../services/event-data.service';
import { SponsorGridComponent } from '../../shared/ui/sponsor-grid.component/sponsor-grid.component';

@Component({
  selector: 'app-sponsors.component',
  imports: [SponsorGridComponent],
  templateUrl: './sponsors.component.html',
  styleUrl: './sponsors.component.css',
})
export class SponsorsComponent {
  private readonly eventData = inject(EventDataService);
  readonly sponsors = toSignal(this.eventData.getSponsors(), { initialValue: null });
}
