import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingsPage } from './listings.page';

describe('ListingsPage', () => {
  let component: ListingsPage;
  let fixture: ComponentFixture<ListingsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingsPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
