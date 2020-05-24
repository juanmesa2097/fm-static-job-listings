import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-listings-filter-toolbar',
  templateUrl: './listings-filter-toolbar.component.html',
  styleUrls: ['./listings-filter-toolbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListingsFilterToolbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
