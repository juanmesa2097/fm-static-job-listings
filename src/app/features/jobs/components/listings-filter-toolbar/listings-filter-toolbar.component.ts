import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-listings-filter-toolbar',
  templateUrl: './listings-filter-toolbar.component.html',
  styleUrls: ['./listings-filter-toolbar.component.css'],
})
export class ListingsFilterToolbarComponent implements OnInit {
  @Input() activeTags: string[];
  @Output() clear = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onClickClear() {
    this.clear.emit();
  }
}
