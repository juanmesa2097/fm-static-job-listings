import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { JobsModule } from './features/jobs/jobs.module';
import { HeaderModule } from './ui/header/header.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, RouterModule, JobsModule, HeaderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
