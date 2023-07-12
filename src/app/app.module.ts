import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AutoComponent } from './auto/auto.component';
import { CasualtyComponent } from './casualty/casualty.component';
import { PersonalComponent } from './personal/personal.component';
import { ResultComponent } from './result/result.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AIComponent } from './ai/ai.component';
import { PropertyClaimComponent } from './property-claim/property-claim.component';
import { AutoClaimComponent } from './auto-claim/auto-claim.component';
import { SpecalityClaimComponent } from './specality-claim/specality-claim.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AutoComponent,
    CasualtyComponent,
    PersonalComponent,
    ResultComponent,
    AIComponent,
    PropertyClaimComponent,
    AutoClaimComponent,
    SpecalityClaimComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
