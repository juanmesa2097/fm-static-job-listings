import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'job-listings',
    pathMatch: 'full',
  },
  {
    path: 'job-listings',
    loadChildren: () =>
      import('./features/jobs/jobs.module').then((m) => m.JobsModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
