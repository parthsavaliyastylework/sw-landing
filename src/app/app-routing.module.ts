import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './layouts/main/main.component';

const routes: Routes = [
{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full',
},
{
  path: 'home',
  component: MainComponent,
  loadChildren: () =>
      import('./components/book-now/book-now.module').then(
        (m) => m.BookNowModule
      ),
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
