import { Pipe, PipeTransform } from '@angular/core';
import { Job } from '@app/features/jobs/shared/job';

@Pipe({
  name: 'tagFilter',
})
export class TagFilterPipe implements PipeTransform {
  transform(jobs: Job[], tags: string[]): Job[] {
    return jobs?.filter((job) =>
      tags.every((tag) => JSON.stringify(job).indexOf(tag) > -1)
    );
  }
}
