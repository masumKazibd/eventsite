import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakerCardComponent } from './speaker-card.component';

describe('SpeakerCardComponent', () => {
  let component: SpeakerCardComponent;
  let fixture: ComponentFixture<SpeakerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpeakerCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpeakerCardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
