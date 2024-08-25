import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBlockForMenuComponent } from './search-block-for-menu.component';

describe('SearchBlockForMenuComponent', () => {
  let component: SearchBlockForMenuComponent;
  let fixture: ComponentFixture<SearchBlockForMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchBlockForMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBlockForMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
