import { Component, OnInit } from '@angular/core';
import { Job } from '../../shared/job';
import { JobsService } from '../../shared/jobs.service';

@Component({
  templateUrl: './listings.page.html',
  styleUrls: ['./listings.page.css'],
})
export class ListingsPage implements OnInit {
  jobs: Job[];
  constructor(private jobsService: JobsService) {}

  ngOnInit(): void {
    this.jobsService.getJobs().subscribe((jobs: Job[]) => (this.jobs = jobs));
  }
}
