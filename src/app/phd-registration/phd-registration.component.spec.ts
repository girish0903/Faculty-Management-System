import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhdRegistrationComponent } from './phd-registration.component';

describe('PhdRegistrationComponent', () => {
  let component: PhdRegistrationComponent;
  let fixture: ComponentFixture<PhdRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhdRegistrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PhdRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
