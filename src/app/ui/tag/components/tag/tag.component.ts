import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TagComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
