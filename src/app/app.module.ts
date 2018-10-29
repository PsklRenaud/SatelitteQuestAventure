import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NasaAPIService } from './nasa-api.service';



import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { Niveau1PageComponent } from './niveau1-page/niveau1-page.component';
import { RecompenseMoonComponent } from './recompense-moon/recompense-moon.component';
import { ConnectFormComponent } from './connect-form/connect-form.component';
import { TableauDeBordComponent } from './tableau-de-bord/tableau-de-bord.component';
import { PimpMySatelliteComponent } from './pimp-my-satellite/pimp-my-satellite.component';
import { ErrorComponent } from './error/error.component';
import { Niveau2PageComponent } from './niveau2-page/niveau2-page.component';
import { SolveHoustonProblemComponent } from './solve-houston-problem/solve-houston-problem.component';
import { FixedBugComponent } from './fixed-bug/fixed-bug.component';
import { MenuComponent } from './menu/menu.component';
import { ConnexionAPIService } from './connexion-api.service';
import { PageTeaserComponent } from './page-teaser/page-teaser.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';





@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    ConnectFormComponent,
    TableauDeBordComponent,
    Niveau1PageComponent,
    RecompenseMoonComponent,
    PimpMySatelliteComponent,
    ErrorComponent,
    Niveau2PageComponent,
    SolveHoustonProblemComponent,
    FixedBugComponent,
    MenuComponent,
    PageTeaserComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserModule, 
    BrowserAnimationsModule,

    RouterModule.forRoot(
      [

      { path: "niveau1", component: Niveau1PageComponent, pathMatch:"full" },
      { path: "welcome-page", component: WelcomePageComponent, pathMatch:"full" },
      { path: "tableau-de-bord", component: TableauDeBordComponent, pathMatch:"full" },
      { path: "pimp-my-satellite", component: PimpMySatelliteComponent, pathMatch:"full" },
      { path: "loser", component: ErrorComponent, pathMatch:"full" },
      { path: "niveau1", component: Niveau1PageComponent , pathMatch:"full"},
      { path: "niveau2", component: Niveau2PageComponent , pathMatch:"full"},
      { path: "recompenseLune", component: RecompenseMoonComponent, pathMatch:"full" },
      { path: "solvehouston", component: SolveHoustonProblemComponent },
      { path: "fixedBug", component: FixedBugComponent },
      { path: "we-ll-be-back", component: PageTeaserComponent },
      { path: "", redirectTo:"welcome-page", pathMatch:"full"}


      ],
      
      {useHash: true}
      ),

    NgbModule.forRoot()
  ],
  providers: [NasaAPIService,ConnexionAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
