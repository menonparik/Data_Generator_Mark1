import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyClaimComponent } from './property-claim.component';

describe('PropertyClaimComponent', () => {
  let component: PropertyClaimComponent;
  let fixture: ComponentFixture<PropertyClaimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyClaimComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyClaimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
