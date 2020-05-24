import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-listings-info',
  templateUrl: './listings-info.component.html',
  styleUrls: ['./listings-info.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListingsInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
