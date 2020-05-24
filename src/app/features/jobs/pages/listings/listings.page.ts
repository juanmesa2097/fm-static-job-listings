import { Component, OnInit } from '@angular/core';
import { JobsService } from '../../shared/jobs.service';

@Component({
  templateUrl: './listings.page.html',
  styleUrls: ['./listings.page.css'],
})
export class ListingsPage implements OnInit {
  constructor(private jobsService: JobsService) {}

  ngOnInit(): void {
    this.jobsService.getJobs().subscribe((jobs) => console.log(jobs));
  }
}
