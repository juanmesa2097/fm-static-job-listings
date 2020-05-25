import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingsTagsComponent } from './listings-tags.component';

describe('ListingsTagsComponent', () => {
  let component: ListingsTagsComponent;
  let fixture: ComponentFixture<ListingsTagsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingsTagsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingsTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
