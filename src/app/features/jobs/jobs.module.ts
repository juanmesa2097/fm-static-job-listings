import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TagModule } from '@app/ui/tag/tag.module';
import { ListingsFilterToolbarComponent } from './components/listings-filter-toolbar/listings-filter-toolbar.component';
import { ListingsInfoComponent } from './components/listings-info/listings-info.component';
import { ListingsLogoComponent } from './components/listings-logo/listings-logo.component';
import { ListingsTagsComponent } from './components/listings-tags/listings-tags.component';
import { JobsRoutingModule } from './jobs-routing.module';
import { ListingsPage } from './pages/listings/listings.page';

@NgModule({
  declarations: [
    ListingsPage,
    ListingsFilterToolbarComponent,
    ListingsLogoComponent,
    ListingsInfoComponent,
    ListingsTagsComponent,
  ],
  imports: [CommonModule, JobsRoutingModule, TagModule, HttpClientModule],
})
export class JobsModule {}
