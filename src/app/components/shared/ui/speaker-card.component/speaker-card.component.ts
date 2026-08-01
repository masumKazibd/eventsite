import { Component, Input } from '@angular/core';
import { Speaker } from '../../../../models/speaker.model';

@Component({
  selector: 'app-speaker-card',
  imports: [],
  templateUrl: './speaker-card.component.html',
  styleUrl: './speaker-card.component.css',
})
export class SpeakerCardComponent {
  @Input() speaker: Speaker | null = null;
  @Input() featured = false;
}
