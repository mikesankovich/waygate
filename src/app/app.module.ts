import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TitleComponent } from './title/title.component';
import { GuideDashboardComponent } from './guide-dashboard/guide-dashboard.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CharacterCreationComponent } from './chapter1/character-creation/character-creation.component';
import { GenerateAttributesComponent } from './chapter1/generate-attributes/generate-attributes.component';
import { CharacterBackgroundComponent } from './chapter1/character-background/character-background.component';
import { BackgroundChartComponent } from './chapter1/character-background/chart/chart.component';
import { SpendSkillPointsComponent } from './chapter1/spend-skill-points/spend-skill-points.component';

import { PrefaceComponent } from './preface/preface.component';
import { QuoteComponent } from './quote/quote.component';
import { SkillListComponent } from './chapter2/skill-list/skill-list.component';

import { NextStepsComponent } from './chapter1/next-steps/next-steps.component';
import { FateOfTheWaygateComponent } from './chapter1/fate-of-the-waygate/fate-of-the-waygate.component';
import { PhysicalDescriptionComponent } from './chapter1/physical-description/physical-description.component';
// Pipes
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { SkillComponent } from './chapter2/skill/skill.component';
import { SkillsComponent } from './chapter2/skills/skills.component';
import { GeneralRulesComponent } from './chapter2/general-rules/general-rules.component';
import { SpecialSkillsComponent } from './chapter2/special-skills/special-skills.component';
import { AcquiringSkillsComponent } from './chapter2/acquiring-skills/acquiring-skills.component';

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
    PrefaceComponent,
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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
