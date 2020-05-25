import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TagsService {
  tagsSubject = new BehaviorSubject<string[]>([]);

  constructor() {}

  get tags(): string[] {
    return this.tagsSubject.value;
  }

  add(tag: string) {
    this.tagsSubject.next([...this.tags, tag]);
    console.log(this.tags);
  }

  remove(tag: string) {
    this.tagsSubject.next(this.tags.filter((t) => t !== tag));
    console.log(this.tags);
  }
}
