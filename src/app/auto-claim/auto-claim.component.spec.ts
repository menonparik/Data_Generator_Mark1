import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoClaimComponent } from './auto-claim.component';

describe('AutoClaimComponent', () => {
  let component: AutoClaimComponent;
  let fixture: ComponentFixture<AutoClaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoClaimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
