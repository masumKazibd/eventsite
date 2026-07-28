import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtfRulesComponent } from './ctf-rules.component';

describe('CtfRulesComponent', () => {
  let component: CtfRulesComponent;
  let fixture: ComponentFixture<CtfRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtfRulesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CtfRulesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
