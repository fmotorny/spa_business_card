import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutCompanyComponent } from './components/other-pages/about-company/about-company.component';
import { PrivacyPolicyComponent } from './components/other-pages/privacy-policy/privacy-policy.component';
import { MainComponent } from './components/other-pages/main/main.component';
import { UsloviyaPokupkiComponent } from './components/other-pages/usloviya-pokupki/usloviya-pokupki.component';
import { KommunikacziiComponent } from './components/other-pages/kommunikaczii/kommunikaczii.component';
import { TechnologyComponent } from './components/other-pages/technology/technology.component';

const bgsUrl = '/assets/images/bgs';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '', component: MainComponent, data: { title: 'Главная' } },
  {
    path: 'o-kompanii',
    component: AboutCompanyComponent,
    data: { title: 'О нас', routeBg: `${bgsUrl}/about-us.jpg`, },
  },
  {
    path: 'tekhnologiya-stroitelstva',
    component: TechnologyComponent,
    data: { title: 'Технология строительства — КП «Wellican Dom»', routeBg: `${bgsUrl}/tekhnologiya-stroitelstva.jpg`, },
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
    data: { title: 'Политика конфиденциальности — КП «Wellican Dom»' },
  },
  {
    path: 'usloviya-pokupki',
    component: UsloviyaPokupkiComponent,
    data: {
      title: 'Условия покупки — КП «Wellican Dom»',
      routeBg: `${bgsUrl}/usloviya-pokupki.jpg`,
    },
  },
  {
    path: 'kommunikaczii',
    component: KommunikacziiComponent,
    data: {
      title: 'Коммуникации — КП «Wellican Dom»',
      routeBg: `${bgsUrl}/usloviya-pokupki.jpg`,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
