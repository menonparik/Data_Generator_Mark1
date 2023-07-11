import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AIComponent } from './ai/ai.component';
import { AutoComponent } from './auto/auto.component';
import { CasualtyComponent } from './casualty/casualty.component';
import { HomeComponent } from './home/home.component';
import { PersonalComponent } from './personal/personal.component';
import { ResultComponent } from './result/result.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'auto', component: AutoComponent},
  {path: 'casualty', component: CasualtyComponent},
  {path: 'AI', component: AIComponent},
  {path: 'personal', component: PersonalComponent},
  
  {path: 'result', component: ResultComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
