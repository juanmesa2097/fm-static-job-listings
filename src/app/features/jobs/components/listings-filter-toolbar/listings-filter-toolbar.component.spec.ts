import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingsFilterToolbarComponent } from './listings-filter-toolbar.component';

describe('ListingsFilterToolbarComponent', () => {
  let component: ListingsFilterToolbarComponent;
  let fixture: ComponentFixture<ListingsFilterToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingsFilterToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingsFilterToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
