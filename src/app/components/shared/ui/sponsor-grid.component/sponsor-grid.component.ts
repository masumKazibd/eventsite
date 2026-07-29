import { Component, Input } from '@angular/core';
import { Sponsor, Sponsors, SponsorTierName } from '../../../../models/sponsor.model';

@Component({
  selector: 'app-sponsor-grid.component',
  imports: [],
  templateUrl: './sponsor-grid.component.html',
  styleUrl: './sponsor-grid.component.css',
})
export class SponsorGridComponent {
  @Input() sponsors: Sponsors | null = null;
  @Input() highlightedSponsorIds: string[] = [];
  readonly tierOrder: SponsorTierName[] = ['platinum', 'gold', 'silver'];

  readonly tierLabels: Record<keyof Sponsors, string> = {
    platinum: 'Platinum Sponsors',
    gold: 'Gold Sponsors',
    silver: 'Silver Sponsors',
  };

  isHighlighted(sponsor: Sponsor): boolean {
    return sponsor.highlighted ?? this.highlightedSponsorIds.includes(sponsor.id);
  }
}
