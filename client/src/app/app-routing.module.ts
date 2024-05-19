import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimplePageComponent } from './components/simple-page/simple-page.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: SimplePageComponent, data: { title: 'Главная' } },
  { path: 'about-us', component: SimplePageComponent, data: { title: 'О нас' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
