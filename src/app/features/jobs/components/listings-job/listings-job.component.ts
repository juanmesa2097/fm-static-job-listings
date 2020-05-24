import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-listings-job',
  templateUrl: './listings-job.component.html',
  styleUrls: ['./listings-job.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListingsJobComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
