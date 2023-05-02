import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () =>
      import('./shared/components/home/home.component').then(
        (mod) => mod.HomeComponent
      ),
  },
  {
    path: 'confirm-decorator-demo',
    loadComponent: () =>
      import(
        './features/confirm-decorator/components/user-table/user-table.component'
      ).then((mod) => mod.UserTableComponent),
  },
  {
    path: 'weekdays-widget-demo',
    loadComponent: () =>
      import(
        './features/weekdays/components/weekdays-widget/weekdays-widget.component'
      ).then((mod) => mod.WeekdaysWidgetComponent),
  },
  { path: '**', redirectTo: 'movies', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
