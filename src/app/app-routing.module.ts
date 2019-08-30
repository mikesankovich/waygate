import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TitleComponent } from './title/title.component';
import { GuideDashboardComponent } from './guide-dashboard/guide-dashboard.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { Chapter1Component } from './chapter1/chapter1.component';
import quotes from './contents/quotes.json';


const routes: Routes = [
  {
    path: '', component: TitleComponent
  },
  {
    path: 'guides',
    component: GuideDashboardComponent,
    data: { showSidebar: true },
    children: [
      {
        path: 'getting-started', component: GettingStartedComponent,
      }, {
        path: 'chapter1', component: Chapter1Component, data: { chapter: 'chapter1', quotes: quotes.chapter1 }
      }
    ]
  },
  // { path: 'crisis-center', component: CrisisListComponent },
  // { path: 'hero/:id',      component: HeroDetailComponent },
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  // { path: '',
  //   redirectTo: '/heroes',
  //   pathMatch: 'full'
  // },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
