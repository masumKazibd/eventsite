import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsorGridComponent } from './sponsor-grid.component';

describe('SponsorGridComponent', () => {
  let component: SponsorGridComponent;
  let fixture: ComponentFixture<SponsorGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SponsorGridComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SponsorGridComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
