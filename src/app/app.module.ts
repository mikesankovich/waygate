import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { TitleComponent } from './shared/title/title.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { QuoteComponent } from './shared/quote/quote.component';
import { GuideDashboardComponent } from './guide-dashboard/guide-dashboard.component';
import { GettingStartedComponent } from './chapter0/getting-started/getting-started.component';
import { CharacterCreationComponent } from './chapter1/character-creation/character-creation.component';
import { GenerateAttributesComponent } from './chapter1/generate-attributes/generate-attributes.component';
import { CharacterBackgroundComponent } from './chapter1/character-background/character-background.component';
import { BackgroundChartComponent } from './chapter1/character-background/chart/chart.component';
import { SpendSkillPointsComponent } from './chapter1/spend-skill-points/spend-skill-points.component';

import { SkillListComponent } from './chapter2/skill-list/skill-list.component';

import { NextStepsComponent } from './chapter1/next-steps/next-steps.component';
import { FateOfTheWaygateComponent } from './chapter1/fate-of-the-waygate/fate-of-the-waygate.component';
import { PhysicalDescriptionComponent } from './chapter1/physical-description/physical-description.component';
import { SkillComponent } from './chapter2/skill/skill.component';
import { SkillsComponent } from './chapter2/skills/skills.component';
import { GeneralRulesComponent } from './chapter2/general-rules/general-rules.component';
import { SpecialSkillsComponent } from './chapter2/special-skills/special-skills.component';
import { AcquiringSkillsComponent } from './chapter2/acquiring-skills/acquiring-skills.component';
import { CustomSkillsComponent } from './chapter2/custom-skills/custom-skills.component';
import { ItemsComponent } from './chapter3/items/items.component';
import { WeaponChartsComponent } from './chapter3/weapon-charts/weapon-charts.component';
import { WeaponChartComponent } from './chapter3/weapon-charts/chart/chart.component';
import { ItemListsComponent } from './chapter3/item-lists/item-lists.component';
import { ItemChartComponent } from './chapter3/item-lists/item-chart/item-chart.component';

// Pipes
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { PlayingTheGameComponent } from './chapter4/playing-the-game/playing-the-game.component';
import { RoleplayingComponent } from './chapter5/roleplaying/roleplaying.component';
import { EnteringCombatComponent } from './chapter6/entering-combat/entering-combat.component';
import { TakingActionComponent } from './chapter6/taking-action/taking-action.component';
import { MakingAttacksComponent } from './chapter6/making-attacks/making-attacks.component';
import { CombatActionsComponent } from './chapter6/combat-actions/combat-actions.component';
import { RunningThroughCombatComponent } from './chapter6/running-through-combat/running-through-combat.component';
import { MagicComponent } from './chapter7/magic/magic.component';
import { NonCombatActionsComponent } from './chapter8/non-combat-actions/non-combat-actions.component';
import { DifficultyChartComponent } from './shared/difficulty-chart/difficulty-chart.component';
import { TheStoryComponent } from './the-story/the-story.component';
import { CharacterSheetComponent } from './character-sheet/character-sheet.component';
import { FiringModesComponent } from './chapter4/playing-the-game/firing-modes/firing-modes.component';

import * as $ from 'jquery';
import * as bootstrap from 'bootstrap';
import { CreaturesComponent } from './chapter9/creatures/creatures.component';
import { CreatureComponent } from './chapter9/creatures/creature/creature.component';
import { LexiconComponent } from './lexicon/lexicon.component';
import { TermComponent } from './lexicon/term/term.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    TitleComponent,
    GuideDashboardComponent,
    GettingStartedComponent,
    SidebarComponent,
    CharacterCreationComponent,
    GenerateAttributesComponent,
    CharacterBackgroundComponent,
    BackgroundChartComponent,
    SpendSkillPointsComponent,
    QuoteComponent,
    SkillListComponent,
    SafeHtmlPipe,
    PhysicalDescriptionComponent,
    NextStepsComponent,
    FateOfTheWaygateComponent,
    SkillComponent,
    SkillsComponent,
    GeneralRulesComponent,
    SpecialSkillsComponent,
    AcquiringSkillsComponent,
    CustomSkillsComponent,
    ItemsComponent,
    WeaponChartsComponent,
    WeaponChartComponent,
    ItemListsComponent,
    ItemChartComponent,
    PlayingTheGameComponent,
    EnteringCombatComponent,
    TakingActionComponent,
    MakingAttacksComponent,
    CombatActionsComponent,
    MagicComponent,
    NonCombatActionsComponent,
    DifficultyChartComponent,
    TheStoryComponent,
    CharacterSheetComponent,
    FiringModesComponent,
    RunningThroughCombatComponent,
    RoleplayingComponent,
    CreaturesComponent,
    CreatureComponent,
    LexiconComponent,
    TermComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
