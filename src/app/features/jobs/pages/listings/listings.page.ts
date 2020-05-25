import { Component, OnDestroy, OnInit } from '@angular/core';
import { TagsService } from '@app/core/services/tags.service';
import { Subscription } from 'rxjs';
import { Job } from '../../shared/job';
import { JobsService } from '../../shared/jobs.service';

@Component({
  templateUrl: './listings.page.html',
  styleUrls: ['./listings.page.css'],
})
export class ListingsPage implements OnInit, OnDestroy {
  jobs: Job[];
  activeTags: string[];
  tabsSubscription: Subscription;

  constructor(
    private jobsService: JobsService,
    private tagsService: TagsService
  ) {}

  ngOnInit(): void {
    this.jobsService.getJobs().subscribe((jobs: Job[]) => (this.jobs = jobs));
    this.tabsSubscription = this.tagsService.tagsSubject.subscribe(
      (tags) => (this.activeTags = tags)
    );
  }

  ngOnDestroy(): void {
    this.tabsSubscription.unsubscribe();
  }

  displayTags(job: Job) {
    return [job.role, job.level, ...job.languages, ...job.tools];
  }
}
