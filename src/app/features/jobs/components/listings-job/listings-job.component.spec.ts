import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingsJobComponent } from './listings-job.component';

describe('ListingsJobComponent', () => {
  let component: ListingsJobComponent;
  let fixture: ComponentFixture<ListingsJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingsJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingsJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
