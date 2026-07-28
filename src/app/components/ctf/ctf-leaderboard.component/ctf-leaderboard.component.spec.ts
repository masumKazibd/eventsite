import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtfLeaderboardComponent } from './ctf-leaderboard.component';

describe('CtfLeaderboardComponent', () => {
  let component: CtfLeaderboardComponent;
  let fixture: ComponentFixture<CtfLeaderboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtfLeaderboardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CtfLeaderboardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
