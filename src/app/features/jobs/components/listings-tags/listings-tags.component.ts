import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-listings-tags',
  templateUrl: './listings-tags.component.html',
  styleUrls: ['./listings-tags.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListingsTagsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
