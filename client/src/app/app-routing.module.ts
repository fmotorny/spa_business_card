import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimplePageComponent } from './components/simple-page/simple-page.component';
import { AboutCompanyComponent } from './components/other-pages/about-company/about-company.component';
import { PrivacyPolicyComponent } from './components/other-pages/privacy-policy/privacy-policy.component';
import { MainComponent } from './components/other-pages/main/main.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: MainComponent, data: { title: 'Главная' } },
  { path: 'o-kompanii', component: AboutCompanyComponent, data: { title: 'О компании' } },
  { path: 'privacy-policy', component: PrivacyPolicyComponent, data: { title: 'Политика конфиденциальности — КП «Wellican village»' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
