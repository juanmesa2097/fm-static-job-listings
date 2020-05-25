import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TagsService } from '@app/core/services/tags.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css'],
})
export class TagComponent implements OnInit, OnDestroy {
  @Input() tag: string;
  @Input() dismissible: boolean;

  state = false;
  subscription: Subscription;

  constructor(private tagsService: TagsService) {}

  ngOnInit(): void {
    this.subscription = this.tagsService.tagsSubject.subscribe(
      (tags) => (this.state = tags.some((tag) => tag === this.tag))
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onChange(e) {
    const { value, checked } = e.target;

    if (checked) {
      this.tagsService.add(value);
    } else {
      this.tagsService.remove(value);
    }
  }

  onClickDismiss() {
    this.tagsService.remove(this.tag);
  }
}
