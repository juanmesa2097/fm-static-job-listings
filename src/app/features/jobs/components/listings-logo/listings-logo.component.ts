import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-listings-logo',
  templateUrl: './listings-logo.component.html',
  styleUrls: ['./listings-logo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListingsLogoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
