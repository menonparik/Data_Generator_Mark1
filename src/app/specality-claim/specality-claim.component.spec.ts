import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecalityClaimComponent } from './specality-claim.component';

describe('SpecalityClaimComponent', () => {
  let component: SpecalityClaimComponent;
  let fixture: ComponentFixture<SpecalityClaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecalityClaimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecalityClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
