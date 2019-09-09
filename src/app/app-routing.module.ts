import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TitleComponent } from './title/title.component';
import { GuideDashboardComponent } from './guide-dashboard/guide-dashboard.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';

// Chapter 1
import { CharacterCreationComponent } from './chapter1/character-creation/character-creation.component';
import { GenerateAttributesComponent } from './chapter1/generate-attributes/generate-attributes.component';
import { CharacterBackgroundComponent } from './chapter1/character-background/character-background.component';
import { SpendSkillPointsComponent } from './chapter1/spend-skill-points/spend-skill-points.component';
import { PhysicalDescriptionComponent } from './chapter1/physical-description/physical-description.component';
import { NextStepsComponent } from './chapter1/next-steps/next-steps.component';
import { FateOfTheWaygateComponent } from './chapter1/fate-of-the-waygate/fate-of-the-waygate.component';

// Chapter 2
import { SkillsComponent } from './chapter2/skills/skills.component';
import { SkillListComponent } from './chapter2/skill-list/skill-list.component';
import { SpecialSkillsComponent } from './chapter2/special-skills/special-skills.component';
import { AcquiringSkillsComponent } from './chapter2/acquiring-skills/acquiring-skills.component';
import { GeneralRulesComponent } from './chapter2/general-rules/general-rules.component';
import { CustomSkillsComponent } from './chapter2/custom-skills/custom-skills.component';
import skills from './chapter2/skills.json';
import specialSkills from './chapter2/special-skills.json';

// Chapter 3
import { ItemsComponent } from './chapter3/items/items.component';
import { WeaponChartsComponent } from "./chapter3/weapon-charts/weapon-charts.component";
import { ItemListsComponent } from "./chapter3/item-lists/item-lists.component";

// Chapter 4
import { PlayingTheGameComponent } from './chapter4/playing-the-game/playing-the-game.component';

// Chapter 5
import { EnteringCombatComponent } from './chapter5/entering-combat/entering-combat.component';
import { TakingActionComponent } from './chapter5/taking-action/taking-action.component';
import { MakingAttacksComponent } from './chapter5/making-attacks/making-attacks.component';
import { CombatActionsComponent } from './chapter5/combat-actions/combat-actions.component';

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
      { path: 'character-creation/spend-skill-points', component: SpendSkillPointsComponent, data: { chapter: 'chapter1' } },
      { path: 'character-creation/physical-description', component: PhysicalDescriptionComponent, data: { chapter: 'chapter1' } },
      { path: 'character-creation/next-steps', component: NextStepsComponent, data: { chapter: 'chapter1' } },
      { path: 'character-creation/fate-of-the-waygate', component: FateOfTheWaygateComponent, data: { chapter: 'chapter1' } },
      { path: 'skills', component: SkillsComponent, data: { chapter: 'chapter2' } },
      { path: 'skills/general-rules', component: GeneralRulesComponent, data: { chapter: 'chapter2' } },
      { path: 'skills/skill-list', component: SkillListComponent, data: { chapter: 'chapter2', content: skills  } },
      { path: 'skills/special-skills', component: SkillListComponent, data: { chapter: 'chapter2', content: specialSkills } },
      { path: 'skills/acquiring-skills', component: AcquiringSkillsComponent, data: { chapter: 'chapter2' } },
      { path: 'skills/custom-skills', component: CustomSkillsComponent, data: { chapter: 'chapter2' } },
      { path: 'items', component: ItemsComponent, data: { chapter: 'chapter3' } },
      { path: 'items/weapon-charts', component: WeaponChartsComponent, data: { chapter: 'chapter3' } },
      { path: 'items/item-lists', component: ItemListsComponent, data: { chapter: 'chapter3' } },
      { path: 'playing-the-game', component: PlayingTheGameComponent, data: { chapter: 'chapter4' } },
      { path: 'combat/entering-combat', component: EnteringCombatComponent, data: { chapter: 'chapter5' } },
      { path: 'combat/taking-action', component: TakingActionComponent, data: { chapter: 'chapter5' } },
      { path: 'combat/making-attacks', component: MakingAttacksComponent, data: { chapter: 'chapter5' } },
      { path: 'combat/combat-actions', component: CombatActionsComponent, data: { chapter: 'chapter5' } },
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
