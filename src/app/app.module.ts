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
import { PrefaceComponent } from './preface/preface.component';
import { QuoteComponent } from './quote/quote.component';

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
    PrefaceComponent,
    QuoteComponent,
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
