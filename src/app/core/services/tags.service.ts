import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Tag } from '../interfaces/tag';

@Injectable({
  providedIn: 'root',
})
export class TagsService {
  private tagsSubject = new BehaviorSubject<Tag[]>([]);

  constructor() {}

  get tags(): Tag[] {
    return this.tagsSubject.value;
  }
}
