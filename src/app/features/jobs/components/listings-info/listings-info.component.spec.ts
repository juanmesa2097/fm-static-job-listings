import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingsInfoComponent } from './listings-info.component';

describe('ListingsInfoComponent', () => {
  let component: ListingsInfoComponent;
  let fixture: ComponentFixture<ListingsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
