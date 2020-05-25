import { Component, Input, OnInit } from '@angular/core';
import { TagsService } from '@app/core/services/tags.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css'],
})
export class TagComponent implements OnInit {
  @Input() tag: string;
  @Input() dismissible: boolean;

  constructor(private tagsService: TagsService) {}

  ngOnInit(): void {}

  onChange(e) {
    const { value, checked } = e.target;

    if (checked) {
      this.tagsService.add(value);
    } else {
      this.tagsService.remove(value);
    }
  }
}
