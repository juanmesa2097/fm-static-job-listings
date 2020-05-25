import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingsLogoComponent } from './listings-logo.component';

describe('ListingsLogoComponent', () => {
  let component: ListingsLogoComponent;
  let fixture: ComponentFixture<ListingsLogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingsLogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingsLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
