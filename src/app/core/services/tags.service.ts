import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Tag } from '../interfaces/tag';

@Injectable({
  providedIn: 'root',
})
export class TagsService {
  public currentTags: Observable<Tag[]>;
  private tagsSubject = new BehaviorSubject<Tag[]>([]);

  constructor() {
    this.currentTags = this.tagsSubject.asObservable();
  }

  get tags(): Tag[] {
    return this.tagsSubject.value;
  }
}
