import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TagFilterPipe } from './tag-filter.pipe';

@NgModule({
  declarations: [TagFilterPipe],
  imports: [CommonModule],
  exports: [TagFilterPipe],
})
export class PipesModule {}
