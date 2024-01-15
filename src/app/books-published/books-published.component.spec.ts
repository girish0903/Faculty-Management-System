import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksPublishedComponent } from './books-published.component';

describe('BooksPublishedComponent', () => {
  let component: BooksPublishedComponent;
  let fixture: ComponentFixture<BooksPublishedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BooksPublishedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BooksPublishedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
