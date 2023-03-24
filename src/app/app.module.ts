import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HomeyoutubeComponent } from './youtube/homeyoutube/homeyoutube.component';
import { HomePortifolioComponent } from './portifolio/home-portifolio/home-portifolio.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SideBarComponent } from './side-bar/side-bar.component';
import { AvatarComponent } from './avatar/avatar.component';
import { SobreComponent } from './sobre/sobre.component';
import { QualificacoesComponent } from './qualificacoes/qualificacoes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HomeyoutubeComponent,
    HomePortifolioComponent,
    SideBarComponent,
    AvatarComponent,
    SobreComponent,
    QualificacoesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
