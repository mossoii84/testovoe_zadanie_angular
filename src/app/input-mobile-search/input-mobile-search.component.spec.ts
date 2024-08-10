import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputMobileSearchComponent } from './input-mobile-search.component';

describe('InputMobileSearchComponent', () => {
  let component: InputMobileSearchComponent;
  let fixture: ComponentFixture<InputMobileSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputMobileSearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputMobileSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
