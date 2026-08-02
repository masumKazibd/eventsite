import { Component, input, Input } from '@angular/core';
import { Sponsor, Sponsors, SponsorTierName } from '../../../../models/sponsor.model';

@Component({
  selector: 'app-sponsor-grid',
  imports: [],
  templateUrl: './sponsor-grid.component.html',
  styleUrl: './sponsor-grid.component.css',
})
export class SponsorGridComponent {
  // Modern Angular 22 Signal Inputs
  readonly sponsors = input<Sponsors | null>(null);
  readonly highlightedSponsorIds = input<string[]>([]);
  
  readonly tierOrder: SponsorTierName[] = ['platinum', 'gold', 'silver'];

  readonly tierLabels: Record<keyof Sponsors, string> = {
    platinum: 'Platinum Sponsors',
    gold: 'Gold Sponsors',
    silver: 'Silver Sponsors',
  };

  isHighlighted(sponsor: Sponsor): boolean { 
    return sponsor.highlighted ?? this.highlightedSponsorIds().includes(sponsor.id);
  }
}