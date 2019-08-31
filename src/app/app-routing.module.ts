import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TitleComponent } from './title/title.component';
import { GuideDashboardComponent } from './guide-dashboard/guide-dashboard.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { CharacterCreationComponent } from './chapter1/character-creation/character-creation.component';
import { GenerateAttributesComponent } from './chapter1/generate-attributes/generate-attributes.component';
import { CharacterBackgroundComponent } from './chapter1/character-background/character-background.component';

const routes: Routes = [
  {
    path: '', component: TitleComponent
  },
  {
    path: 'guides',
    component: GuideDashboardComponent,
    data: { showSidebar: true },
    children: [
      { path: 'getting-started', component: GettingStartedComponent },
      { path: 'character-creation', component: CharacterCreationComponent, data: { chapter: 'chapter1' } },
      { path: 'character-creation/generate-attributes', component: GenerateAttributesComponent, data: { chapter: 'chapter1' } },
      { path: 'character-creation/background', component: CharacterBackgroundComponent, data: { chapter: 'chapter1' } },
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
