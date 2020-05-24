import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TagModule } from '@app/ui/tag/tag.module';
import { ListingsFilterToolbarComponent } from './components/listings-filter-toolbar/listings-filter-toolbar.component';
import { ListingsJobComponent } from './components/listings-job/listings-job.component';
import { JobsRoutingModule } from './jobs-routing.module';
import { ListingsPage } from './pages/listings/listings.page';

@NgModule({
  declarations: [
    ListingsJobComponent,
    ListingsPage,
    ListingsFilterToolbarComponent,
  ],
  imports: [CommonModule, JobsRoutingModule, TagModule, HttpClientModule],
})
export class JobsModule {}
