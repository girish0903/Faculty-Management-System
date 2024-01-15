import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchStudentsComponent } from './research-students.component';

describe('ResearchStudentsComponent', () => {
  let component: ResearchStudentsComponent;
  let fixture: ComponentFixture<ResearchStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResearchStudentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResearchStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
