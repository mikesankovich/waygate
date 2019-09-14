import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TitleComponent } from './shared/title/title.component';
import { GuideDashboardComponent } from './guide-dashboard/guide-dashboard.component';
import { GettingStartedComponent } from './chapter0/getting-started/getting-started.component';

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
import { RoleplayingComponent } from './chapter5/roleplaying/roleplaying.component';

// Chapter 6
import { EnteringCombatComponent } from './chapter6/entering-combat/entering-combat.component';
import { TakingActionComponent } from './chapter6/taking-action/taking-action.component';
import { MakingAttacksComponent } from './chapter6/making-attacks/making-attacks.component';
import { CombatActionsComponent } from './chapter6/combat-actions/combat-actions.component';
import { RunningThroughCombatComponent } from './chapter6/running-through-combat/running-through-combat.component';

// Chapter 7
import { MagicComponent } from './chapter7/magic/magic.component';

// Chapter 8
import { NonCombatActionsComponent } from './chapter8/non-combat-actions/non-combat-actions.component';

// The Story
import { TheStoryComponent } from './the-story/the-story.component';

// Creatures
import { CreaturesComponent } from './chapter9/creatures/creatures.component';

// character Sheet
import { CharacterSheetComponent } from './character-sheet/character-sheet.component';

const routes: Routes = [
  {
    path: '', component: TitleComponent
  },
  {
    path: 'the-story', component: TheStoryComponent
  },
  {
    path: 'character-sheet', component: CharacterSheetComponent
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
      { path: 'roleplaying', component: RoleplayingComponent, data: { chapter: 'chapter5' } },
      { path: 'combat/entering-combat', component: EnteringCombatComponent, data: { chapter: 'chapter6' } },
      { path: 'combat/taking-action', component: TakingActionComponent, data: { chapter: 'chapter6' } },
      { path: 'combat/making-attacks', component: MakingAttacksComponent, data: { chapter: 'chapter6' } },
      { path: 'combat/combat-actions', component: CombatActionsComponent, data: { chapter: 'chapter6' } },
      { path: 'combat/running-through-combat', component: RunningThroughCombatComponent, data: { chapter: 'chapter6' } },
      { path: 'magic', component: MagicComponent, data: { chapter: 'chapter7' } },
      { path: 'non-combat-actions', component: NonCombatActionsComponent, data: { chapter: 'chapter8' } },
      { path: 'creatures', component: CreaturesComponent, data: { chapter: 'chapter9' } },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
